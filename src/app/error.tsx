'use client'
import { useEffect } from 'react'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(`src/app/error.tsx: ${error.message}`)
  }, [error])

  return (
    <>
      <h1>error.tsx</h1>
    </>
  )
}
