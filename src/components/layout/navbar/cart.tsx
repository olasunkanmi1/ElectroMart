import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function Cart() {
  return (
    <Link href='/cart' className={`flex items-center justify-center gap-2 relative transition ease-in-out duration-300 hover:text-primary hover:font-semibold mr-[7px] xls:mr-0`}> 
        <AiOutlineShoppingCart className='w-8 h-8 xls:w-[25px] xls:h-[25px]' /> <span className='hidden xls:flex'> Cart </span>

        <span className='absolute -top-[6px] left-[22px] xls:left-4 w-4 h-4 bg-primary rounded-full text-white text-xs fcc'> 3 </span>
    </Link>
  )
}