"use client";

import { useAppDispatch, useAppSelector, handleCloseAll } from "@redux"
import MobileSort from '../products-page/sort/mobile';
import { Navbar, Footer, Sidebar } from '@components'

const Wrapper = ({children}: {children: React.ReactNode}) => {
    const dispatch = useAppDispatch();
    const {navbarDropdown, filterDropdown, sidebar, mobileFilter} = useAppSelector(({layout}) => layout);

    const handleClick = () => {
        if(navbarDropdown || filterDropdown || sidebar || mobileFilter) {
            dispatch(handleCloseAll());
        }
    }

  return (
    <>
        <div onClick={handleClick}
            className='w-full min-h-[calc(100vh-250px)] md:min-h-[calc(100vh-120px)] space-y-8 mb-8'
        >
            <Navbar />
            {children}
        </div>
            
        <Footer />

        <Sidebar />
        <MobileSort />
    </>
  )
}
export default Wrapper