import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { logo } from '@public'
import { Product } from '@types'
import { useAppSelector } from '@redux'
import { usePathname } from 'next/navigation';

const Product = ({product, homepage}: Product) => {
    const pathname = usePathname();
    const { isList } = useAppSelector(({layout}) => layout)
    
    const { 
        images, name, description, 
        discount, QuantityInStock,
        price, id, newPrice
    } = product;

  return (
    <div className={`shadow-custom rounded-md transition ease-in-out duration-500 hover:scale-[1.01] relative ${isList && pathname !== '/' ? 'ls:flex' : ''}`}>
        <Link href={`/product/${id}`}>
            <div className="ribbon">
                <span> 
                    {discount}% OFF 
                </span>
            </div>
            <div className={`relative h-[200px] z-[2] ${isList && pathname !== '/' ? 'ls:w-1/2' : ''}`}>
                <Image
                    src={images[0]} alt="photo" fill loading='lazy' placeholder='blur'
                    blurDataURL={logo.blurDataURL} 
                    className='object-contain'
                />
            </div>
        </Link>

        <div className={`flex flex-col justify-between p-2 space-y-1 ${isList && pathname !== '/' ? 'ls:w-1/2' : ''}`}>
            <Link href={`/product/${id}`} className={`font-medium text-ellipsis leading-[19px] min-h-[38px] line-clamp-2 ${isList && pathname !== '/' ? 'ls:line-clamp-6' : ''}`}> { name } </Link> 
            <div className='flex flex-col gap-1'>
                <Link href={`/product/${id}`} className='flex justify-between items-center'>
                    <h4 className='font-semibold text-primary text-sm ls:text-base'> ${ newPrice } </h4> 
                    <h4 className='text-xs ls:text-sm line-through text-gray-700'> ${ price } </h4> 
                </Link>
                
                { homepage ? (
                    <Link href={`/product/${id}`} className='text-xs'> {QuantityInStock} items left </Link>
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
    </div>
  )
}

export default Product