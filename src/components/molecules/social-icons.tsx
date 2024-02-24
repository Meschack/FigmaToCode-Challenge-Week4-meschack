import { cn } from '@/lib/utils'
import Image from 'next/image'

const icons = [
  { icon: 'facebook', path: 'https://facebook.com' },
  { icon: 'twitter', path: 'https://twitter.com' },
  { icon: 'twitter', path: 'https://twitter.com' },
  { icon: 'discord', path: 'https://discord.com' },
]

export const SocialIcons = () => {
  return (
    <div className='flex items-center gap-5'>
      {icons.map((icon, index) => (
        <div
          className={cn(
            'border-2 border-black rounded relative h-[56px] w-[56px] inline-flex items-center justify-center',
            index === 0 && 'bg-black'
          )}
          key={/* icon.path */ index}
        >
          <Image
            src={`/assets/icons/social/${icon.icon}.svg`}
            alt={`${icon.icon} icon`}
            width={20}
            height={20}
          />
          <a href={icon.path} className='absolute inset-0'></a>
        </div>
      ))}
    </div>
  )
}
