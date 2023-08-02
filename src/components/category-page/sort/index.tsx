'use client';

import { Category, Brand } from './with-dropdown';
import { Rating, Discount } from './without-dropdown';

const Sort = () => {
  return (
    <div className="hidden md:flex flex-col bg-primary/10 rounded-md w-[230px] absolute">
      <Category />
      <Brand />
      <Discount />
      <Rating />
    </div>
  );
};

export default Sort;