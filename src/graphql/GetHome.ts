import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query Home {
    home {
      banner {
        backgroundDesktop {
          url
          width
          height
        }
        backgroundMobile {
          url
          width
          height
        }
        floatImg {
          url
          width
          height
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
