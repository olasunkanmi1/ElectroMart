import Product from '../../product';
import Top from './top';
import { useAppDispatch, useAppSelector, handleMobileFilter } from '@redux';
import { Skeleton } from '@components';
import Sort from './sort';
import { MdOutlineTune } from 'react-icons/md';
import NotFound from './not-found';

const Products = () => {
  const { productLoading, pageLoading, mobileFilter, isList } = useAppSelector(
    (state) => state.layout
  );
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full md:w-[calc(100%-230px)] md:ml-[250px] shadow-custom rounded-md space-y-[10px]">
      <Top />

      <div className="flex justify-between md:justify-end items-center px-2">
        <div
          className="flex md:hidden items-center gap-2 bg-primary text-white text-sm p-2 rounded cursor-pointer"
          onClick={() => dispatch(handleMobileFilter(!mobileFilter))}
        >
          <MdOutlineTune size={20} />
          <span className="hidden ls:flex"> FILTERS </span>
        </div>

        { pageLoading && <div className="md:ml-auto animate-pulse w-[180px] bg-slate-200 h-4" /> }
        { products.length > 0 && !pageLoading && <Sort /> }
      </div>

      { !products.length && !productLoading ? <NotFound /> : (
          <div className={`grid grid-cols-1 gap-x-3 gap-y-5 p-2 ${isList ? 'listLayout lg:grid-cols-2' : 'gridLayout ms:grid-cols-2 xll:grid-cols-3 lg:grid-cols-4'}`}>
            {productLoading
              ? [...Array(6)].map((_, i) => <Skeleton key={i} />)
              : products.map((product, i) => <Product product={product} key={i} />)}
          </div>
      )}
    </div>
  );
};

export default Products;
