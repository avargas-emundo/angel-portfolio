import { useEffect, useState } from 'react'

export default function AnimatedCounter({ end, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}