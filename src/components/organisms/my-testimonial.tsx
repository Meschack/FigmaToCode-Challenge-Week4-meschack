import firstReviewer from '@/assets/images/testimonials/1.png'
import secondReviewer from '@/assets/images/testimonials/2.jpeg'
import thirdReviewer from '@/assets/images/testimonials/1.png'
import Image from 'next/image'

const review = [
  {
    name: 'Evren Shah',
    message:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    picture: firstReviewer,
    job: 'Designer',
  },

  {
    name: 'Evren Shah',
    message:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    picture: secondReviewer,
    job: 'Designer',
  },

  {
    name: 'Evren Shah',
    message:
      'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
    picture: thirdReviewer,
    job: 'Designer',
  },
]

export const MyTestimonial = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className='mx-auto w-full max-w-[1216px] py-10'>
          <h2 className='w-fit mx-auto'>
            <span className='font-normal'>My</span> Testimonial
          </h2>

          <div className='grid grid-cols-3 gap-6 justify-between'>
            {review.map((review) => (
              <div className='rounded-md shadow-md min-w-[370px] flex items-center flex-col gap-5 p-5'>
                <Image
                  src={review.picture}
                  className='rounded-full'
                  alt=''
                  height={96}
                  width={96}
                />

                <p className='text-center'>{review.message}</p>

                <div className='divide-white'></div>

                <strong>{review.name}</strong>

                <small>{review.job}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
