import Image from 'next/image'

const experiences = [
  {
    title: 'Lead Software Engineer at Google',
    dateRange: 'Nov 2019 - Present',
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    icon: 'google',
  },
  {
    title: 'Software Engineer at Youtube',
    dateRange: 'Nov 2019 - Present',
    description:
      "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    icon: 'youtube',
  },
  {
    title: 'Junior Software Engineer at Apple',
    dateRange: 'Nov 2019 - Present',
    description:
      'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.',
    icon: 'apple',
  },
]

export const MyExperience = () => {
  return (
    <div className='bg-black text-white py-[60px]'>
      <div className='max-w-[1280px] w-full mx-auto'>
        <div className='max-w-[1216px] w-full mx-auto py-[20px]'>
          <h2 className='w-fit mx-auto p-0 text-3xl'>
            <span className='font-normal'>My</span> Experience
          </h2>
        </div>
        <div className='flex flex-col gap-8 max-w-[1216px] w-full mx-auto *:border *:rounded *:max-w-[1168px] *:py-[40px] *:px-[24px] *:border-zinc-500 *:flex *:flex-col *:gap-[28px] *:mx-auto'>
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className='hover:bg-zinc-800 cursor-pointer'
            >
              <div className='flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                  <Image
                    src={`/assets/icons/social/${experience.icon}.svg`}
                    alt={`${experience.icon} icon`}
                    width={32}
                    height={32}
                  />

                  <h4>{experience.title}</h4>
                </div>

                <div>
                  <small className='text-zinc-300'>
                    {experience.dateRange}
                  </small>
                </div>
              </div>

              <p className='text-zinc-300'>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
