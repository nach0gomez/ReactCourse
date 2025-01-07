import './App.css'

import { useEffect, useState } from 'react'

const FACTS_ENDPOINT = 'https://catfact.ninja/fact'

export function App () {
  const [catFact, setCatFact] = useState()
  const [catImage, setCatImage] = useState()

  useEffect(() => {
    fetch(FACTS_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        setCatFact(data.fact)

        const firstWord = data.fact.split(' ', 1)
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
          .then(res => res.json())
          .then(catData => {
            const url = `https://cataas.com/cat/${catData._id}/says/${firstWord}`
            console.log(url)

            setCatImage(url)
          })
          .catch(error => console.error('Error al obtener la imagen del gato:', error))
      })
      .catch(error => console.error('Error al obtener el facto del gato:', error))
  }, [])

  return (
    <main>
      <h1>API de factos :o</h1>
      {catFact && <p>{catFact}</p>}
      <h2>API de gatos :3</h2>
      {catImage && <img src={catImage} alt='imagen de gato' />}
    </main>
  )
}
