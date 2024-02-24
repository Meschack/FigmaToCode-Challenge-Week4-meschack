import { Button } from '../atoms'
import { SocialIcons } from '../molecules'

export const ContactForm = () => {
  return (
    <div className='py-16'>
      <div className='max-w-7xl mx-auto w-full px-8 grid grid-cols-2 items-center'>
        <div>
          <form className='flex flex-col gap-5 max-w-[500px] w-full'>
            <input type='text' placeholder='Your name' />
            <input type='email' placeholder='Email' />
            <input type='url' placeholder='Your website (If exists)' />
            <textarea placeholder='How can I help?*'></textarea>

            <div className='flex gap-5 items-stretch justify-between'>
              <Button className='bg-black px-5 hover:opacity-90 text-white'>
                Get In Touch
              </Button>
              <SocialIcons />
            </div>
          </form>
        </div>

        <div className='flex flex-col gap-0 h-full justify-evenly'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-[48px] leading-[56px]'>
              Let's talk for Something special
            </h2>
            <p className='text-zinc-500'>
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            <div className='flex flex-col gap-2'>
              <strong>meshachgbewezoun@gmail.com</strong>
              <strong>0022954142205</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
