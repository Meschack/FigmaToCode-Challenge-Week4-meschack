import firstProject from '@/assets/images/projects/1.png'
import secondProject from '@/assets/images/projects/2.png'
import thirdProject from '@/assets/images/projects/3.png'
import Image from 'next/image'

const projects = [
  {
    title: 'Crypto Screener Application',
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: firstProject,
  },
  {
    title: 'Euphoria - Ecommerce (Apparels) Website Template',
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book. when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: secondProject,
  },
  {
    title: 'Blog Website Template',
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: thirdProject,
  },
]

export const MyProjects = () => {
  return (
    <div className='bg-black text-white py-[60px]'>
      <div className='max-w-[1280px] w-full mx-auto'>
        <div className='max-w-[1216px] w-full mx-auto py-[20px]'>
          <h2 className='w-fit mx-auto p-0 text-3xl'>
            <span className='font-normal'>My</span> Projects
          </h2>
        </div>

        <div className='w-full mx-auto max-w-[1216px]'>
          {projects.map((project, index) => (
            <div className='flex items-center justify-between even:flex-row-reverse'>
              <div>
                <Image
                  src={project.image}
                  alt={`Photo of the project ${project.title}`}
                />
              </div>

              <div className='flex gap-6 flex-col max-w-xl'>
                <strong>0{index + 1}</strong>
                <h4>{project.title}</h4>
                <p className='text-zinc-500'>{project.description}</p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.8333 9.16658L17.6667 2.33325'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M18.3333 5.66675V1.66675H14.3333'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
