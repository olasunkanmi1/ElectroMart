'use client';

import { useRouter } from "next/navigation";
import { useAppDispatch, handleMobileFilter, handleProductLoading, resetState } from "@redux"
import { Category, Brand } from './with-dropdown';
import { Rating, Discount } from './without-dropdown';

const Sort = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(handleProductLoading(true));
    dispatch(resetState());
    dispatch(handleMobileFilter(false));
    router.push('/products');
  };

  return (
    <div className="hidden md:flex flex-col shadow-custom rounded-md w-[230px] absolute">
      <Category />
      <Brand />
      <Discount />
      <Rating />
      
      <button onClick={handleReset} className='border border-primary rounded  m-3 py-2 px-4 font-bold text-primary hover:bg-primary/80 hover:text-white transition ease-in-out duration-500'>
            RESET ALL
      </button>
    </div>
  );
};

export default Sort;