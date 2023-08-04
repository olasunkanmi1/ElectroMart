'use client';

import Layout from './layout';
import { useAppSelector } from '@redux';
import { filterOptions } from '@utils'

const Category = () => {
  const { category } = useAppSelector((state) => state.filter);
  const { categories } = filterOptions;

  const options = {
    name: 'category',
    selection: categories,
  };

  return <Layout options={options} />;
};

export default Category;