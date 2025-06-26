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
    <Link href={url} target='_blank' title={title} className='group hover:bg-primary-600 p-1 rounded-md'>
      <Icon className='size-6 transition group-hover:scale-[.8]' role='img' aria-hidden />
    </Link>
  )
}

export function Footer({ phone, email, facebook, instagram, linkedin, whatsapp, name, slogan }: FooterProps) {
  return (
    <footer className='py-6 text-center sm:text-left'>
      <Container>
        <h4 className='font-semibold mb-2 leading-none'>
          <span className='pl-2 border-l-2 border-primary-600'>{name}</span>
          <span className='font-normal'> - {slogan}</span>
        </h4>
        <div className='sm:flex justify-between items-center space-y-6'>
          <div className='space-y-1 text-sm'>
            <p>
              <span className='font-semibold'>Tel.: </span>
              <Link href={`tel:${formatPhone(phone)}`} className='font-light'>
                {formatPhone(phone)}
              </Link>
            </p>
            <p>
              <span className='font-semibold'>E-mail: </span>
              <Link href={`mailto:${email}`} className='font-light'>
                {email}
              </Link>
            </p>
          </div>
          <nav className='gap-1.5 inline-flex'>
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
