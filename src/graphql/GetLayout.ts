import { gql } from '@apollo/client'

export const GET_LAYOUT = gql`
  query Layout {
    home {
      enterprise {
        name
        socialShare {
          url
        }
        shortDescription
      }
    }
  }
`
