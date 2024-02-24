import Image from 'next/image'
import { SocialIcons } from '../molecules'

import heroImage from '@/assets/icons/section/hero.svg'

export const HeroSection = () => {
  return (
    <div className='max-w-[1280px] mx-auto mt-[60px]'>
      <div className='max-w-[1216px] w-full mx-auto flex items-center justify-between'>
        <div className='w-full max-w-[600px] flex flex-col gap-10'>
          <div className='flex flex-col gap-10'>
            <div className='text-[48px] leading-[56px]'>
              Hello I'am <strong>Evren Shah</strong>. <strong>Frontend</strong>{' '}
              Developer Based In <strong>India</strong>.
            </div>
            <p>
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book.
            </p>
          </div>
          <SocialIcons />
        </div>

        <div className='max-w-[889px]'>
          <Image src={heroImage} alt='Hero section image' />
        </div>
      </div>
    </div>
  )
}
