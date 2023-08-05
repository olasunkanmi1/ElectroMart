'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DealsLayoutProps, Product as ProductType } from '@types';
import { axiosInstance, shuffleProducts } from '@utils';
import Product from '../../product';
import Skeleton from '../../product/skeleton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DealsLayout({ heading, category }: DealsLayoutProps) {
  const [featuredProducts, setFeaturedProducts] = useState<
    ProductType['product'][]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/product?category=${category}&featured=true`)
      .then(({ status, data }) => {
        if (status === 200) {
          setFeaturedProducts(data.products);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [category]);

  return (
    <div className="wrapper">
      <div className="shadow-custom rounded-md overflow-hidden">
        <div className="flex items-center justify-between bg-primary/80 text-white p-2">
          <h2 className="font-semibold w-[calc(100%-100px)]"> {heading} </h2>

          <Link href={`/products?category=${category}`} className="fcc gap-1">
            SEE ALL
            <AiOutlineRight />
          </Link>
        </div>

        <Swiper
          // slidesPerView={3}
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
            },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="h-[370px] w-full !p-3 deals"
        >
          {loading
            ? [...Array(5)].map((_, i) => (
                <SwiperSlide className="" key={i}>
                  <Skeleton homepage />
                </SwiperSlide>
              ))
            : shuffleProducts(featuredProducts).map((product, i) => (
                <SwiperSlide key={i} className="">
                  <Product product={product} homepage />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}
