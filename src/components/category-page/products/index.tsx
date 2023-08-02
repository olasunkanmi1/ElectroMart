import Product from '../../product';
import Top from './top';
import { useAppSelector } from '@redux';
import { Skeleton } from '@components';
import Sort from './sort';

const Products = () => {
  const {productLoading} = useAppSelector((state) => state.layout);
  const {products} = useAppSelector((state) => state.products);
  
  return (
    <div className='w-full md:w-[calc(100%-230px)] md:ml-[250px] shadow-custom rounded-md space-y-5'>
      <Top />

      { productLoading ? (
        <div className='ml-auto mr-2 animate-pulse w-[180px] bg-slate-200 h-4' />
      ) : (
        <Sort />
      ) }

      <div className='grid grid-cols-2 xll:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 p-2'>
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