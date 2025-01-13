import { useEffect, useState } from 'react'

export function useTitle () {
  const [title, updateTitle] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (title === '') {
      setError('Title can not be empty')
      return
    }

    if (title.match(/^\d+$/)) {
      setError('Title can not be a digit')
      return
    }

    if (title.length < 3) {
      setError('Title should be at least 3 characters long')
      return
    }

    setError('')
  }, [title])

  return { title, error, updateTitle }
}
