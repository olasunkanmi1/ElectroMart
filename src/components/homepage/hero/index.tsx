import Image from 'next/image';
import Categories from '../categories';
import { hero } from '@public';

export default function Hero() {
  return (
    <div className="wrapper flex flex-col lg:flex-row gap-3">
      <div className="relative w-full h-[150px] ms:h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto lg:w-[calc(100%-225px)] rounded-md overflow-hidden cursor-pointer col-start-2">
        <Image
          src={hero}
          alt="hero"
          fill
          className="transition duration-500 ease-in-out hover:scale-[1.02]"
        />
      </div>

      <Categories />
    </div>
  );
}
