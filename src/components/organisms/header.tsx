import Link from 'next/link'
import { Button, Logo } from '../atoms'

const links = [
  {
    path: '#',
    label: 'About Me',
  },
  {
    path: '#',
    label: 'Skills',
  },
  {
    path: '#',
    label: 'Projects',
  },
  {
    path: '#',
    label: 'Contact Me',
  },
]

export const Header = () => {
  return (
    <header className='w-full max-w-[1280px] py-5 mx-auto'>
      <div className='flex items-center justify-between w-full max-w-[1216px] mx-auto'>
        <Logo />
        <nav>
          <ul className='flex gap-5 items-center'>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.path} className='text-[20px] font-semibold'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className='bg-black text-white'>
          <span>Resume</span>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      </div>
    </header>
  )
}
