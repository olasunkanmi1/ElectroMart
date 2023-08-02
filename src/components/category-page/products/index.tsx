import Product from '../../product';
import Top from './top';
import { useAppSelector } from '@redux';
import { Skeleton } from '@components';

const Products = () => {
  const {productLoading} = useAppSelector((state) => state.layout);
  const {products} = useAppSelector((state) => state.products);
  
  return (
    <div className='md:w-[calc(100%-230px)] md:ml-[250px] shadow-custom rounded-md space-y-5'>
      <Top />

      <div className='grid grid-cols-2 xll:grid-cols-3 lg:grid-cols-4 gap-3 p-2'>
        { productLoading ? (
          [...Array(6)].map((_, i) => (
            <Skeleton key={i} />
          ))
        ) : (
          products.map((product, i) => <Product product={product} key={i} />)
        ) }
      </div>
    </div>
  )
}

export default Products