import { ErrorComponent } from 'components/ErrorComponent/ErrorComponent'

export default function Custom404() {
  return <ErrorComponent title='404' description='Página não encontrada.' showButton />
}
