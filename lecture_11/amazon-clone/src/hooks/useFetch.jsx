import React, { useEffect, useState } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          setLoading(true)

          const response = await fetch(url)
          const jsonData = await response.json()

          setData(jsonData)
          setLoading(false)
        } catch (error) {
          setError(error.message)
        }
      }
      fetchData()
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch
