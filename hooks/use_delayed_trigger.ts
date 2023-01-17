import { useEffect, useState } from 'react'

export const useDelayedTrigger = (delay: number) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), delay)
  }, [])

  return loaded
}
