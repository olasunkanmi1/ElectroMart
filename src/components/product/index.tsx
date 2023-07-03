import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai';
import { logo } from '@public'

const Product = () => {
    // const { 
    //     imageUrl, name, description, 
    //     discountPercentage, originalPrice, 
    //     salePrice, productPageUrl 
    // } = topDeals;

  return (
    <Link href="/product/">
        <div className='shadow-custom rounded-md overflow-hidden  transition ease-in-out duration-500 hover:scale-[1.01]'>
            <div className='relative h-[200px]'>
                <Image
                    src={logo} alt="photo" fill loading='lazy' placeholder='blur'
                    blurDataURL={logo.blurDataURL} 
                    className='object-contain'
                />
            </div>

            <div className='p-2'>
                <h4 className='font-semibold'> name </h4> 
                <span className='text-sm'> description </span> 
                <h4 className='font-semibold'> price </h4> 
                <h4 className='font-medium text-sm line-through'> price </h4> 
                <p className='text-xs'> 10 items left </p>
                <div className='h-2 bg-gray-300 rounded-full overflow-hidden relative before:absolute before:content-[""] before:h-full before:w-[50%] before:bg-primary/80 before:left-0' />
            </div>
        </div>
    </Link>
  )
}

export default Product