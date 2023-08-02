import { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai';
import { logo } from '@public'
import { Product } from '@types'

const Product = ({product}: Product) => {
    const { 
        images, name, description, 
        discount, QuantityInStock,
        price, id
    } = product;
    const discounted = (discount/100) * price;
    const newPrice = (price - discounted).toFixed(2)

    const styles: CSSProperties  = {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    } 

  return (
    <Link href={`/product/${id}`}>
        <div className='shadow-custom rounded-md overflow-hidden  transition ease-in-out duration-500 hover:scale-[1.01] relative'>
            <span className='absolute right-1 top-1 bg-secondary text-white rounded text-xs z-[3] p-[3px]'> -{discount}% </span>
            <div className='relative h-[200px] z-[2]'>
                <Image
                    src={images[0]} alt="photo" fill loading='lazy' placeholder='blur'
                    blurDataURL={logo.blurDataURL} 
                    className='object-contain'
                />
            </div>

            <div className='p-2 space-y-1'>
                <h4 className='font-medium text-ellipsis leading-[19px]' style={styles}> { name } </h4> 
                {/* <p className='text-sm whitespace-nowrap overflow-hidden overflow-ellipsis'> { description } </p>  */}
                <div className='flex justify-between items-center'>
                    <h4 className='font-semibold text-primary'> ${ newPrice } </h4> 
                    <h4 className='text-sm line-through text-gray-700'> ${ price } </h4> 
                </div>
                <p className='text-xs'> {QuantityInStock} items left </p>
                {/* <div className='h-2 bg-gray-300 rounded-full overflow-hidden relative before:absolute before:content-[""] before:h-full before:w-[50%] before:bg-primary/80 before:left-0' /> */}
            </div>
        </div>
    </Link>
  )
}

export default Product