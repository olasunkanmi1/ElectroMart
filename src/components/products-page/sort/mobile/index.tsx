'use client';

import Top from './top';
import ResetAndFind from './reset-and-find';
import { Discount, Rating } from '../desktop/without-dropdown';
import Category from './category-and-brand/category';
import Brand from './category-and-brand/brand';
import { useAppSelector } from '@redux';

const MobileSort = () => {
  const { mobileFilter } = useAppSelector((state) => state.layout);

  return (
    <div className={`md:hidden fixed left-[10px] w-[calc(100%-20px)] duration-500 ease-in-out bg-gray-50 shadow-[rgba(0,0,0,0.24)_0px_3px_8px] h-[calc(100%-150px)] rounded-tl-[20px] rounded-tr-[20px] z-10 ${ mobileFilter ? 'bottom-0' : '-bottom-[100%]' }`}>
      <div className='relative h-full'>
        <Top />

        <div className=' space-y-4 overflow-auto h-[calc(100%-113px)] p-5 pt-0'>
          <Category />
          <Brand />
          <Discount mobile />
          <Rating mobile />
        </div>

        <ResetAndFind />
      </div>
    </div>
  );
};

export default MobileSort;