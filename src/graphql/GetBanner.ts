import { gql } from '@apollo/client'

export const GET_BANNER = gql`
  query Banner {
    home {
      banner {
        background {
          url
          width
          height
          formats
        }
        floatImg {
          url
          width
          height
          formats
          alternativeText
        }
        title
        description
        label
        url
      }
    }
  }
`
