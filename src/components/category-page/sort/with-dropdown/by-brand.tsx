import Layout from './layout';
import { useAppSelector } from '@redux';
import { selections } from '@utils'

const Brand = () => {
  const { category, brand } = useAppSelector((state) => state.filter);
  const { brands, categories } = selections;
  const selectedValue = brand === 'dji' ? 'DJI' :
    brand === 'jbl' ? 'JBL' : brand;

  const options = {
    name: 'brand',
    selection: category === 'any' ? brands : {
      ...brands,
      items: brands.items.filter(brand => brand.relatedCategory.includes(category))
    },
    selectedValue,
  };

  return <Layout options={options} />;
};

export default Brand;