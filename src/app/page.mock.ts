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
    url: '/social-share.webp'
  },
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  whatsapp: '47999558118'
}

export const bannerMock: BannerProps = {
  backgroundDesktop: {
    url: '/tests/backgroundDesktop.webp',
    width: 1920,
    height: 1080
  },
  backgroundMobile: {
    url: '/tests/backgroundMobile.webp',
    width: 640,
    height: 1138
  },
  floatImg: {
    url: '/tests/floatImg.webp',
    width: 768,
    height: 735,
    alternativeText: 'floatImg'
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
        objective: 'Aprender a amar o fitness e saber como encaixa-lo em uma vida feliz'
      },
      {
        objective: 'Conquistar resultados físicos e mentais'
      },
      {
        objective: 'Ter alguém acompanhando de perto a sua evolução e segurando sua mão durante o processo inteiro'
      },
      {
        objective: 'Se frustou tentando perder gordura ou ganhar massa muscular e não teve sucesso'
      },
      {
        objective: 'Está cansado(a) de seguir dietas restritivas que não funcionam no longo prazo'
      },
      {
        objective: 'Precisa de um plano que se adapte à sua rotina, e não o contrário'
      },
      {
        objective: 'Já tentou sozinho(a), mas sente que falta direcionamento e consistência'
      },
      {
        objective: 'Busca melhorar a autoestima e a confiança no próprio corpo'
      }
    ]
  },
  sectionBenefits: {
    title: 'Entrando para o time você vai receber',
    benefits: [
      {
        title: 'Treinos Personalizados',
        description: 'Protocolo de treino que pode ser executado em qualquer academia.',
        img: {
          url: '/tests/benefit1.webp'
        }
      },
      {
        title: 'Dieta e Nutrição',
        description: 'Plano de dieta individualizado com valores que cabem no seu bolso.',
        img: {
          url: '/tests/benefit2.webp'
        }
      },
      {
        title: 'Suporte Integral',
        description: 'Acompanhamento diário com uma equipe de profissionais.',
        img: {
          url: '/tests/benefit3.webp'
        }
      },
      {
        title: 'Avaliação Mensal',
        description: 'Chamadas semanais para avaliar seu progresso e resultados.',
        img: {
          url: '/tests/benefit4.webp'
        }
      }
    ]
  },
  sectionAbout: {
    title: 'Quem sou eu?',
    description: `<p>
				Debbi é uma personal trainer profissional apaixonada por ajudar pessoas a se sentirem mais fortes e confiantes.
				Com disciplina e dedicação, ela acredita que a constância e o equilíbrio são fundamentais para uma vida saudável.
				Seu compromisso vai além do treino, inspirando mudanças que refletem no bem-estar físico e mental.
			</p>`
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
        question: 'Como é feita a avaliação inicial?',
        answer:
          'A avaliação inicial é feita através de um questionário detalhado e, em alguns casos, com uma chamada de vídeo. Assim, conseguimos entender seu histórico, objetivos e necessidades.'
      },
      {
        question: 'Preciso de equipamentos para treinar?',
        answer:
          'Não necessariamente. Os treinos podem ser adaptados para serem feitos em casa, ao ar livre ou em academias, com ou sem equipamentos, de acordo com o que você tem disponível.'
      },
      {
        question: 'Posso cancelar ou pausar a consultoria?',
        answer:
          'Sim, você pode pausar ou cancelar a consultoria. Informe-nos com antecedência, e ajustaremos o seu plano conforme necessário.'
      },
      {
        question: 'Inclui acompanhamento nutricional?',
        answer:
          'Sim. O plano inclui orientações alimentares adaptadas à sua realidade e objetivos. Se necessário, indicamos um nutricionista parceiro para um acompanhamento mais aprofundado.'
      },
      {
        question: 'Com que frequência terei contato com o profissional?',
        answer:
          'O acompanhamento é contínuo, com respostas rápidas via WhatsApp, e revisões semanais por mensagem ou chamada, conforme o plano contratado.'
      },
      {
        question: 'É necessário ter experiência com treino?',
        answer:
          'Não. A consultoria é feita sob medida tanto para iniciantes quanto para pessoas mais experientes. O plano é adaptado ao seu nível.'
      },
      {
        question: 'E se eu tiver alguma limitação física ou lesão?',
        answer:
          'Todos os treinos são personalizados. Caso você tenha alguma limitação, o planejamento é ajustado para garantir sua segurança e evolução.'
      },
      {
        question: 'Como recebo os treinos e atualizações?',
        answer:
          'Você receberá tudo organizado por aplicativo ou planilha, com vídeos demonstrativos e instruções claras. As atualizações são feitas conforme seu progresso.'
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
