import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query Home {
    home {
      enterprise {
        name
        phone
        email
        facebook
        instagram
        linkedin
        whatsapp
      }
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
        }
        title
        description
        label
        url
      }
      sectionBenefits {
        title
        benefits {
          title
          description
          img {
            url
          }
        }
      }
      sectionPlans {
        title
        showDiscount
        plans {
          title
          price
          discount
          description
          url
        }
      }
      faq {
        title
        questions {
          question
          answer
        }
      }
    }
  }
`
