import { Provider } from 'components/Provider'
import { GET_LAYOUT } from 'graphql/GetLayout'
import { Metadata, Viewport } from 'next'
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
  slogan: string
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

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.query({ query: GET_LAYOUT })

  const { name, slogan, shortDescription, socialShare }: EnterpriseProps = data.home.enterprise
  return {
    title: `${name} - ${slogan}`,
    authors: [{ name: 'Alefer Reinert', url: 'https://aleferreinert.vercel.app' }],
    description: shortDescription,
    verification: {
      google: '01tG19FkhgIo8cteSWl6WUHYFYCeZywVTSJC6Ua5WGA'
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL
    },
    openGraph: {
      type: 'website',
      url: process.env.NEXT_PUBLIC_BASE_URL,
      title: `${name} - ${slogan}`,
      description: shortDescription,
      images: socialShare.url
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} - ${slogan}`,
      description: shortDescription,
      images: socialShare.url
    }
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#141414'
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Provider>
      <html lang='pt-BR'>
        <body className={`${merienda.variable} ${inter.variable} font-sans bg-secondary-theme text-paragraph-theme`}>
          {children}
        </body>
      </html>
    </Provider>
  )
}
