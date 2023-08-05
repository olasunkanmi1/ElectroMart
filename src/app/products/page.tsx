"use client"

import {useState, useEffect} from 'react';
import { Sort, Products } from '@components'
import { axiosInstance, shuffleProducts } from '@utils';
import { ServerSideProps, Product } from '@types';
import { useAppDispatch, useAppSelector, handleProducts, handleFilterChange, handleProductLoading, handlePageLoading } from '@redux';

export default function ProductsPage({params, searchParams}: ServerSideProps) {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state) => state.filter);
  const { category, brand, rating, discount, sort } = searchParams

  useEffect(() => {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (key in filterState) {
        dispatch(handleFilterChange({ name: key, value: value.toString() }));
      }
    });

    const fetchData = async () => {
      const queryParams = {
        category: category as string || '',
        brand: brand as string || '',
        rating: rating as string || '',
        discount: discount as string || '',
        sort: sort as string || 'featured',
      };

      const queryString = new URLSearchParams(queryParams).toString();
      const url = `/product${queryString ? `?${queryString}` : ''}`;
      try {
        await fetch(url, {cache: 'no-store'})
        .then(res => res.json())
        .then(({products}: {products: Product['product'][]}) => {
          if(filterState.sort !== 'featured') {
            dispatch(handleProducts(products));
          } else {
            const featuredProducts = products.filter(product => product.featured);
            const nonFeaturedProducts = products.filter(product => !product.featured);

            const sorted = [...shuffleProducts(featuredProducts), ...shuffleProducts(nonFeaturedProducts)]
            dispatch(handleProducts(sorted));
          }
          dispatch(handleProductLoading(false));
          dispatch(handlePageLoading(false));
        })
      } catch (error) {
        console.log('Error:', error);
        dispatch(handleProducts([]));
        dispatch(handleProductLoading(false));
        dispatch(handlePageLoading(false));
      }
    };

    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, brand, rating, discount, sort, searchParams])

  return (
    <div className='wrapper flex gap-4 relative min-h-[480px]'>
      <Sort />
      <Products />
    </div>
  )
}