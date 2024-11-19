export default function Custom404() {
  console.log('NEXT_PUBLIC_API_URL: ', process.env.NEXT_PUBLIC_API_URL)
  console.log('NEXT_PUBLIC_BASE_URL: ', process.env.NEXT_PUBLIC_BASE_URL)
  return (
    <>
      <h1>404</h1>
      <p>Página não encontrada.</p>
    </>
  )
}
