import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import { Container } from 'components/Container/Container'
import { ReactNode } from 'react'
import { IoReturnDownBack } from 'react-icons/io5'

interface ErrorComponentProps {
  title?: string
  description?: ReactNode
  showButton?: boolean
}

export function ErrorComponent({
  title = 'Ops!',
  description = 'Algo deu errado, volte mais tarde.',
  showButton = false
}: ErrorComponentProps) {
  return (
    <Container>
      <div className='my-10 border-l-2 pl-4 border-primary-600'>
        <h1 className='font-bold text-3xl mb-2'>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description! }} />
      </div>
      {showButton && (
        <ButtonLink href='/' className='mt-5' size='sm'>
          Voltar
          <IoReturnDownBack />
        </ButtonLink>
      )}
    </Container>
  )
}
