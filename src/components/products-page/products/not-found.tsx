import Image from 'next/image';
import {notFound} from '@public';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Image src={notFound} alt='not found' width={300} height={300} />

        <h4 className='font-semibold text-primary'> Please try other options </h4>
        
    </div>
  )
}
export default NotFound