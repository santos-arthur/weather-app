import { LocationData } from '@/app/interfaces/LocationData'
import Image from 'next/image'

const NotFound = () => {
  return(
    <div className='not-Found w-full text-center mt-12 transition-all ease-in-out duration-500'>
    <Image
      src='/images/404.png'
      alt='Bad Location Image'
      width='275'
      height='275'
    />
    <p className='text-xl font-medium mt-3'> Oops! Location not found! </p>
  </div>
  ) 
}

export default NotFound;