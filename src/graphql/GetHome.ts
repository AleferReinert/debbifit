import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query Home {
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
      enterprise {
        name
        phone
        email
        facebook
        instagram
        linkedin
        whatsapp
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
