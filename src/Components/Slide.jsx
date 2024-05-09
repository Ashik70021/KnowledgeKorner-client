import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[48rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/60'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-5xl mb-4'>
            {text}
          </h1>
          <br />
          <Link
            to=''
            className='w-full px-5 py-4 mt-4 text-lg font-medium text-white capitalize transition-colors duration-300 transform bg-[#912BBC] rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
          >
            Explore more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide