import Image from 'next/image'

import aboutHeroImage from '@/assets/icons/section/about.svg'

export const AboutSection = () => {
  return (
    <div className='py-[60px]'>
      <div className='w-full max-w-[1280px] px-8 mx-auto flex items-center justify-between'>
        <div>
          <Image src={aboutHeroImage} alt='A man' />
        </div>

        <div className='max-w-[610px] flex flex-col gap-[20px]'>
          <h2 className='text-4xl'>
            <span className='font-normal'>About</span> Me
          </h2>

          <div className='flex flex-col gap-[20px] *:text-zinc-500'>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
