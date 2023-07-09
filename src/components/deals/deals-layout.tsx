"use client"

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { logo } from '@public'
import { DealsLayoutProps } from '@types'
import Product from '../product'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DealsLayout({ heading, category, topDeals }: DealsLayoutProps) {
    // const { 
    //     imageUrl, name, description, 
    //     discountPercentage, originalPrice, 
    //     salePrice, productPageUrl 
    // } = topDeals;

  return (
    <div className='wrapper'>
        <div className='shadow-custom rounded-md overflow-hidden'>
            <div className='flex items-center justify-between bg-primary/80 text-white p-2'>
                <h2 className='font-semibold w-[calc(100%-100px)]'> { heading } </h2>
            
                <Link href={`/categories/${category}`} className='fcc gap-1'>
                    SEE ALL
                    <AiOutlineRight />
                </Link>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    380: {
                        slidesPerView: 2,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    900: {
                        slidesPerView: 4,
                    }
                }}
                navigation={true}
                pagination={{clickable: true}}
                modules={[Navigation, Pagination]}
                className="h-[400px] w-full !p-3 deals"
            >
                {
                    [...Array(6)].map((_, i) => {
                        return (
                            <SwiperSlide key={i} className='h-full'>
                                <Product />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>     
        </div>
    </div>
  )
}