
import {
    useAppDispatch,
    useAppSelector,
    handleFilterChange,
    handleFilterDropdown,
    handleProductLoading
} from '@redux';
import { SortLayoutProps, FilterState } from '@types';
import { findProducts } from '@utils';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Layout: React.FC<SortLayoutProps>  = ({options}) => {
    const {name, selection} = options;
    const { items, placeholder, queryName } = selection;

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const filterState = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

  const handleSelect = (value: string) => {
    dispatch(handleProductLoading(true));
    dispatch(handleFilterChange({ name, value }));
    if(name === 'category') {
      dispatch(handleFilterChange({ name: 'brand', value: '' }));
    }
    
    findProducts({ [queryName]: value }, router, pathname, searchParams);
  };

  return (
    <div className='space-y-2'>
      <h5 className='text-lg'> {placeholder} </h5>

      <div className='flex overflow-auto w-full gap-2 pb-3'>        
        <div className='flex gap-2'>
            { items.map(({name: title, value}) => (
                <div onClick={() => handleSelect(value)} key={title} className={`mobileSort ${filterState[name as keyof FilterState]  === value ? 'bg-primary bg-opacity-20 border border-primary text-primary' : ''}`}>
                    { title }
                </div>
            )) }
        </div>
      </div>
    </div>
  )
}

export default Layout