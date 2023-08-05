import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineUser} from 'react-icons/ai'
import {drone, computer, watch, game, phoneTab, tv, cam, audio, home } from '@public'

export default function Categories() {
    const options = [
        { title: 'Smartwatches', url: 'smartwatches', icon: watch },
        { title: 'Computing', url: 'computing', icon: computer },
        { title: 'Drones', url: 'drones', icon: drone },
        { title: 'Gaming', url: 'gaming', icon: game },
        { title: 'Phones & Tablets', url: 'phonesAndTabs', icon: phoneTab },
        { title: 'Televisions', url: 'televisions', icon: tv },
        { title: 'Audios', url: 'audio', icon: audio },
        { title: 'Photography', url: 'photography', icon: cam },
        { title: 'Home Appliances', url: 'homeAppliances', icon: home },
        // { title: 'Accessories', url: 'accessories', icon: computer },
    ];
      
  return (
    <div className='flex lg:flex-col gap-2 p-2 bg-primary/10 rounded-md lg:order-first overflow-auto '>
        { options.map(({ title, url, icon }) => (
            <Link href={`/products?category=${url}`} key={title} className='lg:flex items-center gap-2 lg:pr-2 rounded-md  h-[100px] min-w-[150px] lg:h-auto lg:w-auto overflow-hidden shadow-custom bg-white border border-primary/10 transition ease-in-out duration-300 hover:border-primary/80'> 
                <div className='fcc bg-primary/80 h-[50px] w-full lg:h-9 lg:w-9'>
                    <Image src={icon} alt={title} width={25} height={25} />
                </div>
                <span className='fcc p-2 lg:p-0 w-full lg:w-auto h-[50px] lg:h-auto text-center lg:text-left'> {title} </span>
            </Link>
        )) }
        
    </div>
  )
}
