"use client";

import Link from 'next/link';
import { useAppSelector, useAppDispatch, handleSidebar } from '@redux';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineDown } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    const {sidebar} = useAppSelector((state) => state.layout);
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useAppDispatch();

    const navLinks = [
        { 
            heading: 'Account', 
            links: [
                { route: '/orders', title: 'Orders', active: pathname === '/orders' },
                { route: '/saved', title: 'Saved Items', active: pathname === '/saved' },
                { route: '/update/profile', title: 'Edit Profile', active: pathname === '/update/profile' },
                { route: '/update/password', title: 'Change Password', active: pathname === '/update/password' },
            ] 
        },
        { 
            heading: 'Help', 
            links: [
                { route: '/faqs', title: 'Frequently Asked Questions', active: pathname === '/faqs' },
                { route: '/help', title: 'Help Center', active: pathname === '/help' },
            ] 
        },
    ];

  return (
    <div className={`md:hidden fixed top-[122px] z-10 w-full ms:w-[300px] h-[calc(100vh-122px)] min-h-[280px] overflow-auto duration-500 ease-in-out bg-[#fefefe] pb-[100px] space-y-3 ${sidebar ? 'left-0' : '-left-[100%] ms:-left-[300px]'}`}>
        <div className='flex flex-col justify-between'>
            <div className=''>
                { navLinks.map(({ heading, links }) => (
                    <div className='border-b p-3' key={heading}>
                        <div className='flex justify-between items-center text-primary'>
                            <h5 className='font-semibold'> {heading} </h5>
                            <AiOutlineDown size={15} />
                        </div>

                        <div className='flex flex-col'>
                            { links.map(({route, title, active}) => (
                                <Link href={route} key={route} className={`flex gap-3 font-medium text-gray-500 w-full p-3 hover:bg-primary hover:text-white ${active ? 'bg-primary text-white' : ''}`} onClick={() => dispatch(handleSidebar(false))}> 
                                    { title } 
                                </Link>
                            )) }
                        </div>

                    </div>
                )) }
            </div>

            <button className='flex gap-3 font-medium text-gray-500 w-full p-3 hover:bg-primary hover:text-white' onClick={() => dispatch(handleSidebar(false))}> <FiLogOut size={25} /> Sign Out </button>
        </div>
    </div>
  )
}

export default Sidebar;