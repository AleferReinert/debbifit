import { EnterpriseProps } from 'app/layout'
import { BannerProps } from 'components/Banner/Banner'
import { GET_HOME } from 'graphql/GetHome'
import { HomeProps } from './page'

export const enterpriseMock: EnterpriseProps = {
  name: 'DebbiFit',
  slogan: 'Sua consultoria fitness online e personalizada',
  email: 'consultoria@debbifit.com.br',
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
}

export const bannerMock: BannerProps = {
  backgroundDesktop: {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundDesktop.webp`,
    width: 1920,
    height: 1080,
    formats: {
      xsmall: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundDesktop-xsmall.webp`,
        width: 320,
        height: 180
      },
      small: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundDesktop-small.webp`,
        width: 640,
        height: 360
      },
      medium: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundDesktop-medium.webp`,
        width: 768,
        height: 432
      },
      large: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundDesktop-large.webp`,
        width: 1024,
        height: 576
      },
      xlarge: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundDesktop-xlarge.webp`,
        width: 1280,
        height: 720
      }
    }
  },
  backgroundMobile: {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundMobile.webp`,
    width: 1080,
    height: 1920,
    formats: {
      xsmall: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundMobile-xsmall.webp`,
        width: 180,
        height: 320
      },
      small: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundMobile-small.webp`,
        width: 360,
        height: 640
      },
      medium: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundMobile-medium.webp`,
        width: 432,
        height: 768
      },
      large: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundMobile-large.webp`,
        width: 576,
        height: 1024
      },
      xlarge: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/backgroundMobile-xlarge.webp`,
        width: 720,
        height: 1280
      }
    }
  },
  floatImg: {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/tests/floatImg.webp`,
    width: 768,
    height: 735,
    alternativeText: 'Mulher fazendo exercícios',
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
  title: '<p><i>Invista na sua saúde&nbsp;</i></p><p><i><strong>física </strong>e <strong>mental!</strong></i></p>',
  description:
    '<p>Receba seu <strong>plano de dieta</strong> + <strong>treino 100% personalizado</strong> e um acompanhamento no whatsapp para garantir sua evolução.</p>',
  label: 'Faça parte do nosso time',
  url: 'https://google.com'
}

export const homeMock: HomeProps = {
  banner: bannerMock,
  enterprise: enterpriseMock,
  sectionObjectives: {
    title: 'Somos para você que quer...',
    objectives: [
      {
        objective: 'Descobrir uma nova maneira de amar o fitness e integrá-lo ao seu dia a dia com alegria'
      },
      {
        objective: 'Transformar não só o corpo, mas também a mente, com resultados duradouros'
      },
      {
        objective: 'Ter orientação personalizada que te apoie em cada etapa da sua jornada'
      },
      {
        objective: 'Vencer barreiras e alcançar resultados que antes pareciam impossíveis'
      },
      {
        objective: 'Adotar treinos criativos e diversificados, adaptados ao seu estilo de vida'
      },
      {
        objective: 'Fortalecer não só os músculos, mas também a autoestima e confiança'
      },
      {
        objective: 'Receber dicas exclusivas e atualizações frequentes para inovar nos treinos'
      },
      {
        objective: 'Reencontrar o prazer de se alimentar bem, sem dietas restritivas ou sofrimento'
      },
      {
        objective: 'Fazer parte de uma comunidade vibrante, cheia de pessoas que compartilham os mesmos objetivos'
      },
      {
        objective: 'Construir hábitos saudáveis e sustentáveis para uma vida mais equilibrada'
      }
    ]
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
  sectionAbout: {
    title: 'Quem sou eu?',
    description:
      '<p>Sou a Debbi, personal trainer online, e estou aqui para te ajudar a alcançar seus objetivos de forma prática e eficiente. Com treinos e dietas personalizadas, vou te acompanhar de perto para garantir que você alcance o corpo e a mente dos seus sonhos.</p>'
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

export const homeMocks = [
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
