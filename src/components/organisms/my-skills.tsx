import Image from 'next/image'

const skills = [
  {
    label: 'Git',
    icon: 'git',
  },
  {
    label: 'Javascript',
    icon: 'javascript',
  },
  {
    label: 'Sass/Scss',
    icon: 'sass',
  },
  {
    label: 'NestJs',
    icon: 'nest',
  },
  {
    label: 'Storybook',
    icon: 'storybook',
  },
  {
    label: 'NestJs',
    icon: 'nest',
  },
  {
    label: 'Git',
    icon: 'git',
  },
  {
    label: 'Git',
    icon: 'git',
  },
  {
    label: 'Socket.io',
    icon: 'socket',
  },
  {
    label: 'Sass/Scss',
    icon: 'sass',
  },
]

export const MySkills = () => {
  // TODO: Revoir cette merde
  return (
    <div className='my-[60px] flex flex-col gap-10 items-center w-full max-w-[1280px] mx-auto'>
      <h2 className='w-fit'>
        My <strong>Skills</strong>
      </h2>
      <div className='grid grid-cols-5 justify-between gap-x-10 py-[20px] w-full max-w-[1216px] gap-y-[40px]'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='rounded border-2 aspect-square border-black flex flex-col justify-evenly items-center'
          >
            <Image
              width={56}
              height={56}
              src={`/assets/icons/skills/icon-${skill.icon}.svg`}
              alt=''
            />
            <h3>{skill.label}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
