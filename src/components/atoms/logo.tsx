import Link from 'next/link'

import LogoFile from '@/assets/images/logo.svg'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href='/'>
      <Image src={LogoFile} alt='Personal Logo' />
    </Link>
  )
}
