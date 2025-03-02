import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query Home {
    home {
      banner {
        backgroundDesktop {
          url
          width
          height
          formats
        }
        backgroundMobile {
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
        slogan
        phone
        email
        facebook
        instagram
        linkedin
        whatsapp
      }
      sectionObjectives {
        title
        objectives {
          objective
        }
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
      sectionAbout {
        title
        description
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
