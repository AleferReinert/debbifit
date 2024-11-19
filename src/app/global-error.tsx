'use client'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.log(`src/app/global-error.tsx: ${error.message}`)

  return (
    <html>
      <body>
        <h1>global-error.tsx</h1>
        <p>{error.message}</p>
      </body>
    </html>
  )
}
