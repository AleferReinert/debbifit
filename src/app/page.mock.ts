import { EnterpriseProps } from 'app/layout'
import { GET_HOME } from 'graphql/GetHome'
import { HomeProps } from './page'

interface mockProps extends HomeProps {
  enterprise: EnterpriseProps
}

export const homeMock: mockProps = {
  enterprise: {
    name: 'IgorFit - Sua consultoria fitness online e personalizada',
    email: 'consultoria@igorfit.com.br',
    phone: '47999558118',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus amet as.',
    socialShare: {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/social-share.webp`
    },
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    whatsapp: '47999558118'
  },
  banner: {
    background: {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/background.webp`,
      width: 1920,
      height: 1080,
      formats: {
        xsmall: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/background-xsmall.webp`,
          width: 320,
          height: 180
        },
        small: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/background-small.webp`,
          width: 640,
          height: 360
        },
        medium: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/background-medium.webp`,
          width: 768,
          height: 432
        },
        large: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/background-large.webp`,
          width: 1024,
          height: 576
        },
        xlarge: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/background-xlarge.webp`,
          width: 1280,
          height: 720
        }
      }
    },
    floatImg: {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/floatImg.webp`,
      width: 768,
      height: 735,
      formats: {
        xsmall: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/floatImg-xsmall.webp`,
          width: 256,
          height: 320
        },
        small: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/floatImg-small.webp`,
          width: 512,
          height: 640
        },
        medium: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/floatImg-medium.webp`,
          width: 614,
          height: 768
        },
        large: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/floatImg-large.webp`,
          width: 819,
          height: 1024
        }
      }
    },
    title: 'Transforme seu <i>físico</i> com nossa <strong>metodologia!</strong>',
    description:
      '<p>Receba seu <strong>plano de dieta</strong> + <strong>treino 100% personalizado</strong> e um acompanhamento no whatsapp para garantir sua evolução.</p><p>Na minha carreira sempre fui reconhecido por ter feito muito com pouco. Ter tido <strong>resultados fora da média</strong> com poucos recursos. E é exatamente isso que vou passar dentro da minha consultoria.</p>',
    label: 'Faça parte do nosso time',
    url: 'https://google.com'
  },
  sectionBenefits: {
    title: 'Entrando para o time você vai receber',
    benefits: [
      {
        title: 'Treino Personalizado',
        description: 'Protocolo de treino com as bases que utilizo, podendo ser executa em qualquer academia',
        img: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/benefit.webp`
        }
      },
      {
        title: 'Dieta e Nutricionista',
        description: 'Plano de dieta individualizado sem firulas, com valores que cabem no seu bolso',
        img: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/benefit.webp`
        }
      },
      {
        title: 'Suporte Integral',
        description: 'Acompanhamento diário no Whatsapp comigo e minha equipe de profissionais',
        img: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/benefit.webp`
        }
      },
      {
        title: 'Avaliação Mensal',
        description: 'Chamadas semanais para avaliar o resultado do pessoal e muito networking',
        img: {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/benefit.webp`
        }
      }
    ]
  },
  sectionPlans: {
    title: 'Escolha seu plano',
    showDiscount: true,
    plans: [
      {
        title: 'Plano Mensal',
        price: 169,
        discount: null,
        description: null,
        url: 'https://mensal.com'
      },
      {
        title: 'Plano Trimestral',
        price: 169,
        discount: 10,
        description: 'Fidelidade de 3 meses',
        url: 'https://trimestral.com'
      },
      {
        title: 'Plano Semestral',
        price: 169,
        discount: 20,
        description: 'Fidelidade de 6 meses',
        url: 'https://semestral.com'
      }
    ]
  },
  faq: {
    title: 'Perguntas Frequentes',
    questions: [
      {
        question: 'É tudo personalizado?',
        answer:
          'Sim, ao entrar vamos pedir que nos envie tudo como funciona sua rotina e hábitos, baseado em suas respostas vamos montar seu protocolo.'
      },
      {
        question: 'Os treinos renovam mensalmente?',
        answer:
          'Sim, todos os treinos e dietas serão alterados de acordo com a necessidade a cada 30 dias após nossa avaliação.'
      },
      {
        question: 'Por onde poderei tirar minhas dúvidas?',
        answer:
          'Disponibilizamos um número de Whatsapp exclusivo para alunos do Time, onde poderão tirar todas as suas referentes a treino e dieta.'
      },
      {
        question: 'Tenho restrição física. A consultoria é pra mim?',
        answer:
          'Sim, pedimos que nos conte com detalhe ao entrar para o time qual a sua restrição, para que possamos ter o cuidado necessário para direcionar a melhor estratégia para você!'
      }
    ]
  }
}

export const mocks = [
  {
    request: {
      query: GET_HOME
    },
    result: {
      data: {
        home: homeMock
      }
    }
  }
]
