import Image from 'next/image';
import Buttons from './buttons';
import Ratings from './ratings';

const OneStop = () => {
  return (
    <div className="wrapper flex flex-col lg:flex-row overflow-hidden lg:justify-between space-y-5">
        <div className='relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden m-auto lg:m-0 h-[350px] sm:h-[480px] w-full sm:w-[500px] xl:w-[600px]'>
            <Image src="https://res.cloudinary.com/dhmaa2bz7/image/upload/v1697037896/electromart/tmp-3-1697037876474_c3dqsh.webp" alt="illustration" fill priority />          
        </div>

        <div className='flex flex-col justify-center space-y-4 lg:max-w-[450px] lg:w-[calc(100%-500px)] xl:max-w-[500px]'>
            <h1 className="font-bold font-rw text-[30px] xls:text-[40px] lg:text-[50px] xl:text-[50px] lg:leading-[55px] lg:max-w-[470px]"> Quality Electronics at Unbeatable Prices </h1>
            <h3 className='font-medium font-ms text-[18px] leading-[21px] text-gray-400'> Discover quality electronics at prices that won&apos;t be beaten anywhere else. Our one-stop online marketplace offers a wide selection of the latest tech and appliances, ensuring you get the best value for your money. </h3>

            <Buttons />
            <Ratings />
        </div>
      
    </div>
  )
} 

export default OneStop