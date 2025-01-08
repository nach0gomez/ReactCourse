import { useState, useEffect } from 'react'
import { getRandomCatFact } from '../services/facts'
import { getCatImage } from '../services/images'

export const useCatFact = () => {
  const [catFact, setCatFact] = useState(null)
  const [catImage, setCatImage] = useState(null)

  const refreshCatData = async () => {
    try {
      const fact = await getRandomCatFact()
      setCatFact(fact)

      const firstWord = fact.split(' ')[0]
      const image = await getCatImage(firstWord)
      setCatImage(image)
    } catch (error) {
      console.error('Error while fetching cat data:', error)
    }
  }

  useEffect(() => {
    refreshCatData()
  }, [])

  return { catFact, catImage, refreshCatData }
}
