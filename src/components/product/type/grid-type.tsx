import { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { logo } from '@public'
import { ProductTypeProps } from '@types'

const GridType: React.FC<ProductTypeProps> = ({options}) => {
    const {product, homepage} = options;

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
        <div className='shadow-custom rounded-md  transition ease-in-out duration-500 hover:scale-[1.01] relative'>
            <div className="ribbon">
                <span> 
                    {discount}% OFF 
                </span>
            </div>
            <div className='relative h-[200px] z-[2]'>
                <Image
                    src={images[0]} alt="photo" fill loading='lazy' placeholder='blur'
                    blurDataURL={logo.blurDataURL} 
                    className='object-contain'
                />
            </div>

            <div className='p-2 space-y-1'>
                <h4 className='font-medium text-ellipsis leading-[19px]' style={styles}> { name } </h4> 
                <div className='flex justify-between items-center'>
                    <h4 className='font-semibold text-primary text-sm ls:text-base'> ${ newPrice } </h4> 
                    <h4 className='text-xs ls:text-sm line-through text-gray-700'> ${ price } </h4> 
                </div>
                { homepage ? (
                    <p className='text-xs'> {QuantityInStock} items left </p>
                ) : (
                    <div className='flex justify-between items-center space-x-2'>
                        <button className='flex justify-center items-center py-1 text-xs ls:text-sm bg-primary/80 text-white font-semibold rounded w-full'> 
                            <AiOutlineShoppingCart size={20} className='hidden ls:block mr-2' /> ADD TO CART 
                        </button>
                        {/* <button className='text-primary'> <AiOutlineHeart size={20} /> </button> */}
                    </div>
                ) }
            </div>
        </div>
    </Link>
  )
}

export default GridType