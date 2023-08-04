import Layout from './layout';
import { useAppSelector } from '@redux';
import { filterOptions } from '@utils'

const Rating = ({mobile}: {mobile?: boolean}) => {
    const { rating } = useAppSelector((state) => state.filter);
    const { ratings } = filterOptions;

    const options = {
        name: 'rating',
        selection: ratings,
        selectedValue: rating,
        mobile
    };

  return (
    <Layout options={options} />
  )
}

export default Rating