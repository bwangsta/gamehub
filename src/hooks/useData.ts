import axios, { AxiosRequestConfig, CanceledError } from "axios"
import { useState, useEffect } from "react"

type FetchResponse<T> = {
  count: number
  results: T[]
}

function useData<T>(
  query: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) {
  const [data, setData] = useState<T[]>([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(
    () => {
      const controller = new AbortController()

      setLoading(true)
      axios
        .get<FetchResponse<T>>(
          `https://api.rawg.io/api/${query}?key=${
            import.meta.env.VITE_API_KEY
          }`,
          { signal: controller.signal, ...requestConfig }
        )
        .then((response) => setData(response.data.results))
        .catch((error) => {
          if (error instanceof CanceledError) return
          setError(error.message)
        })
        .finally(() => setLoading(false))

      return () => controller.abort()
    },
    dependencies ? [...dependencies] : []
  )

  return { data, isLoading, error }
}

export default useData
