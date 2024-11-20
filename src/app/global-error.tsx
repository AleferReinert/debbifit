'use client'
/* Para exibir esse componente:
- Vá na aba 'Components' do React Developer Tools
- Selecione o componente AppRouter -> ErrorBoundary -> ErrorBoundaryHandler
- Na coluna da direita, clique em "!" (Force the selected component into an errored state)
*/
import './globals.css'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  console.error(error)

  return (
    <html>
      <body className='global-error'>
        <h1>Ops!</h1>
        <p>Algo deu errado, volte mais tarde.</p>
        <button onClick={() => reset()}>Tentar novamente</button>
      </body>
    </html>
  )
}
