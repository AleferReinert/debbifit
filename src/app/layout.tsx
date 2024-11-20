import { SpeedInsights } from '@vercel/speed-insights/next'
import { Provider } from 'components/Provider'
import { GET_LAYOUT } from 'graphql/GetLayout'
import { Inter, Merienda } from 'next/font/google'
import { ReactNode } from 'react'
import { client } from 'utils/client'
import './globals.css'

const inter = Inter({
  weight: ['300', '400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const merienda = Merienda({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merienda'
})

export interface EnterpriseProps {
  name: string
  phone: string
  email: string
  facebook: string | null
  instagram: string | null
  linkedin: string | null
  whatsapp: string | null
  shortDescription: string
  socialShare: {
    url: string
  }
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const { data, error } = await client.query({ query: GET_LAYOUT })

  if (error) {
    console.error(error)
    throw new Error(`Erro em app/layout.tsx: ${error.message}`)
  }

  const { name, shortDescription, socialShare }: EnterpriseProps = data.home.enterprise

  return (
    <Provider>
      <html lang='pt-BR'>
        <head>
          <title>{name}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content={shortDescription} />
          <meta name='theme-color' content='#000' />
          <meta name='google-site-verification' content='01tG19FkhgIo8cteSWl6WUHYFYCeZywVTSJC6Ua5WGA' />
          <link rel='preconnect' href='https://vercel.live' />
          <meta name='author' content={name} />
          <link rel='canonical' href={process.env.NEXT_PUBLIC_BASE_URL} />

          <meta property='twitter:title' content={name} />
          <meta property='twitter:description' content={shortDescription} />
          <meta property='twitter:image' content={socialShare.url} />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='og:title' content={name} />
          <meta property='og:site_name' content={name} />
          <meta property='og:description' content={shortDescription} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={process.env.NEXT_PUBLIC_BASE_URL} />
          <meta property='og:image' content={socialShare.url} />
          <meta
            property='og:image:alt'
            content='Imagem que mostra o site responsivo em um celular, tablet e notebook.'
          />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
        </head>
        <body
          className={`${merienda.variable} ${inter.variable} font-sans bg-secondary-theme text-lg text-paragraph-theme`}
        >
          {children}
          <SpeedInsights />
        </body>
      </html>
    </Provider>
  )
}
