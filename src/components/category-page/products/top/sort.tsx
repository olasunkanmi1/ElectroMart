import { AiOutlineUp } from 'react-icons/ai';
import { useAppDispatch, useAppSelector, handleFilterDropdown, handleFilterChange } from '@redux';
import { selections } from '@utils'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { findProducts } from '@utils';

const Sort = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const { filterDropdown } = useAppSelector((state) => state.layout);
    const { sort } = useAppSelector((state) => state.filter);
    const { sortBy } = selections;

    const { items, placeholder, queryName } = sortBy;
    const sortValue = sort === 'any' ? 'Popular'
    : sort === 'price-asc' ? 'Lowest Price'
    : sort === 'price-desc' ? 'Highest Price' : 'Featured'

    const handleSelect = (value: string) => {
        dispatch(handleFilterChange({ name: 'sort', value }));
        dispatch(handleFilterDropdown('sort'));
        findProducts({ [queryName]: value }, router, pathname, searchParams);
    };

    return (
        <div className='relative'>
            <div className='flex items-center cursor-pointer' onClick={() => dispatch(handleFilterDropdown('sort'))}>
                <p className=''> 
                    <span className='font-medium'> {placeholder}:  </span>
                    {sortValue} 
                </p>
                <AiOutlineUp className={`ml-1 transition-all duration-300 ${filterDropdown === 'sort' ? '' : '-rotate-180'}`} />
            </div>

            { filterDropdown === 'sort' && (
                <>
                    <div className={`tooltip `} />
                    <div className="dropdownWrapper top-[30px] right-0 w-[200px]">
                        <div className="flex flex-col space-y-2 w-full">
                            {items.map(({ name, value }) => {
                            return (
                                <div
                                    onClick={() => handleSelect(value)}
                                    key={name}
                                    className={`flex items-center justify-center py-1 px-2 w-full rounded-full border text-sm cursor-pointer hover:tabSortActive 
                                                ${
                                                    sort === value
                                                    ? 'tabSortActive text-primary'
                                                    : 'text-black'
                                                }
                                            `}
                                    >
                                    {name}
                                </div>
                            );
                            })}
                        </div>
                    </div>
                </>     
            ) }
        </div>
    )
}
  
export default Sort