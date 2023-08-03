'use client'

import Image from 'next/image'
import Link from 'next/link'
import {  usePathname } from 'next/navigation'
import Hamburger from './hamburger'
import {logo} from '@public'
import Searchbox from './searchbox'
import Account from './account'
import Help from './help'
import Cart from './cart'

const Navbar = () => {
    const pathname = usePathname();

  return (
    <div className='wrapper sticky top-0 !mt-0 bg-[#fefefe] z-[22] border-b h-[122px] xls:h-[130px] lg:h-[75px]'>
        <div className='flex justify-between items-center h-[75px]'>
            <div className='flex items-center gap-4 h-[55px]'>
                <Hamburger />
                <Link href="/" className='h-[60px]'> 
                    <Image src={logo} alt="logo" width={75} height={60} priority />
                </Link>
            </div>

            <Searchbox className='hidden lg:flex' />

            <div className=" flex items-center gap-5">
                <Link href={`/login${pathname === '/' ? '' : `?redirect=${pathname}`}`} className='hidden sm:flex py-2 px-4 bg-primary/80 rounded text-white btnAnimation hover:bg-primary/100'> 
                    Sign In
                </Link>

                {/* <Account /> */}
                <Help />
                <Cart />
            </div>

        </div>
        <Searchbox className='flex lg:hidden mx-auto' />
    </div>
  )
}

export default Navbar