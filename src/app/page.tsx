import { Banner } from 'components/Banner/Banner'
import { FaqProps } from 'components/Faq/Faq'
import { SectionBenefitsProps } from 'components/SectionBenefits/SectionBenefits'
import { SectionPlansProps } from 'components/SectionPlans/SectionPlans'
import { GET_HOME } from 'graphql/GetHome'
import { client } from 'utils/client'
import { EnterpriseProps } from './layout'

export interface HomeProps {
  enterprise: EnterpriseProps
  sectionBenefits: SectionBenefitsProps
  sectionPlans: SectionPlansProps
  faq: FaqProps
}

export default async function Page() {
  const { data, error } = await client.query({ query: GET_HOME })

  if (error) {
    console.error(error)
    throw new Error('Ocorreu um erro ao buscar os dados, tente novamente mais tarde.')
  }

  const { sectionBenefits, sectionPlans, faq, enterprise }: HomeProps = data.home

  return (
    <>
      <Banner />
      {/*
      <SectionBenefits title={sectionBenefits.title} benefits={sectionBenefits.benefits} />
      <SectionPlans title={sectionPlans.title} showDiscount={sectionPlans.showDiscount} plans={sectionPlans.plans} />
      <Faq title={faq.title} questions={faq.questions} />
      <Footer
        name={enterprise.name}
        phone={enterprise.phone}
        email={enterprise.email}
        facebook={enterprise.facebook}
        instagram={enterprise.instagram}
        linkedin={enterprise.linkedin}
        whatsapp={enterprise.whatsapp}
      />
			 */}
    </>
  )
}
