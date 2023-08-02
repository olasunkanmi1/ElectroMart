import Layout from './layout';
import { useAppSelector } from '@redux';
import { filterOptions } from '@utils'

const Discount = () => {
    const { discount } = useAppSelector((state) => state.filter);
    const { discounts } = filterOptions;

    const options = {
        name: 'discount',
        selection: discounts,
        selectedValue: discount,
      };

  return (
    <Layout options={options} />
  )
}

export default Discount