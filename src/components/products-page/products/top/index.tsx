import LayoutSwitch from './layout-switch';
import { useAppSelector } from '@redux';

const Top = () => {
  const {category, brand} = useAppSelector((state) => state.filter);
  const {products} = useAppSelector((state) => state.products);
  const {productLoading, pageLoading} = useAppSelector((state) => state.layout);
  const total = products.length;

  const selectedValue = !category ? 'All Products' : category === 'phonesAndTabs' ? 'Phones and Tablets'
    : category === 'homeAppliances'  ? 'Home Appliances' : 
    category.charAt(0).toUpperCase() + category.slice(1);

    return (
      <div className=''>
        <div className='flex items-center border-b border-primary/10 p-2'>
          { pageLoading ? (
            <div className='animate-pulse w-[250px] bg-slate-200 h-7' />
          ) : (
            <>
              <h1 className='font-semibold text-xl text-primary'> 
                {selectedValue} {brand && `> ${brand.charAt(0).toUpperCase() + brand.slice(1)}`}  
              </h1>
              
            </>
          )}
        </div>
        
        <div className='flex justify-between items-center border-b border-primary/10 p-2'>
          { productLoading ? (
            <div className='animate-pulse w-[180px] bg-slate-200 h-5' />
          ) : (
            <h1 className=''> { total < 1 ? 'No product found' : `${total} product${total > 1 ? 's' : ''} found` } </h1>
          )}
          
          { pageLoading ? (
            <div className='animate-pulse w-20 bg-slate-200 h-11 rounded-md' />
          ) : (
            <LayoutSwitch />
          )}
        </div>
      </div>
    )
}
  
export default Top