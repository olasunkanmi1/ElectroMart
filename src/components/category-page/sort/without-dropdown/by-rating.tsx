import Layout from './layout';
import { useAppSelector } from '@redux';
import { filterOptions } from '@utils'

const Rating = () => {
    const { rating } = useAppSelector((state) => state.filter);
    const { ratings } = filterOptions;

    const options = {
        name: 'rating',
        selection: ratings,
        selectedValue: rating,
    };

  return (
    <Layout options={options} />
  )
}

export default Rating