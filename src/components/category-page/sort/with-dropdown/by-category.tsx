'use client';

import Layout from './layout';
import { useAppSelector } from '@redux';
import { selections } from '@utils'

const Category = () => {
  const { category } = useAppSelector((state) => state.filter);
  const { categories } = selections;
  const selectedValue =  category === 'phonesAndTabs' ? 'Phones and Tablets'
      : category === 'homeAppliances'  ? 'Home Appliances' : category;

  const options = {
    name: 'category',
    selection: categories,
    selectedValue,
  };

  return <Layout options={options} />;
};

export default Category;