import { EnterpriseProps } from 'app/layout'
import { Container } from 'components/Container/Container'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { formatPhone } from 'utils/formatPhone'

export interface FooterProps extends Omit<EnterpriseProps, 'shortDescription' | 'socialShare'> {}

export interface SocialLinkProps {
  url: string | null
  Icon: IconType
  title: string
}

const SocialLink = ({ url, Icon, title }: SocialLinkProps) => {
  if (!url) return null
  return (
    <Link href={url} target='_blank' title={title} className='group'>
      <Icon className='size-8 transition group-hover:fill-primary-600' role='img' />
    </Link>
  )
}

export function Footer({ phone, email, facebook, instagram, linkedin, whatsapp, name }: FooterProps) {
  return (
    <footer className='py-6 text-center sm:text-left'>
      <Container>
        <h4 className='font-semibold mb-2 border-l-2 leading-none pl-2 border-primary-600'>{name}</h4>
        <div className='sm:flex justify-between items-center space-y-6'>
          <div className='space-y-1'>
            <p>
              <span className='font-bold'>Tel.: </span>
              <Link href={`tel:${formatPhone(phone)}`}>{formatPhone(phone)}</Link>
            </p>
            <p>
              <span className='font-bold'>E-mail: </span>
              <Link href={`mailto:${email}`}>{email}</Link>
            </p>
          </div>
          <nav className='space-x-2 inline-flex'>
            <SocialLink title='Facebook' url={facebook} Icon={FaFacebook} />
            <SocialLink title='Instagram' url={instagram} Icon={FaInstagram} />
            <SocialLink title='LinkedIn' url={linkedin} Icon={FaLinkedin} />
            <SocialLink title='Whatsapp' url={`https://wa.me/55${whatsapp}`} Icon={FaWhatsapp} />
          </nav>
        </div>
      </Container>
    </footer>
  )
}
