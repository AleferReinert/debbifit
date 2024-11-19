'use client'
import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'
import { client } from 'utils/client'

interface ProviderProps {
  children: ReactNode
}

export function Provider({ children }: ProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
