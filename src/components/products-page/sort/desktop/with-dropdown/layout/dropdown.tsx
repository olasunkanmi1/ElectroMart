"use client";

import {
  useAppDispatch,
  useAppSelector,
  handleFilterChange,
  handleFilterDropdown,
  handleProductLoading
} from '@redux';
import { FilterDropdownProps, FilterState } from '@types';
import { findProducts } from '@utils';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Dropdown: React.FC<FilterDropdownProps> = ({ name, items, queryName }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filterState = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();


  const handleSelect = (value: string) => {
    dispatch(handleProductLoading(true));
    dispatch(handleFilterDropdown(name));
    if(name === 'category') {
      dispatch(handleFilterChange({ name: 'brand', value: '' }));
      dispatch(handleFilterChange({ name, value }));
    } else {
      dispatch(handleFilterChange({ name, value }));
    }
    
    findProducts({ [queryName]: value }, router, pathname, searchParams);
  };

  return (
    <div className="dropdownWrapper top-[75px] left-0 w-[calc(100%-16px)] mx-2 max-h-[250px] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <div className="flex flex-col space-y-2 w-full">
        {items.map(({ name: title, value }) => {
          return (
            <div
              onClick={() => filterState[name as keyof FilterState] === value ? dispatch(handleFilterDropdown(name)) : handleSelect(value)}
              key={title}
              className={`flex items-center justify-center py-1 px-2 w-full rounded-full border text-sm cursor-pointer hover:tabSortActive 
                         ${
                           filterState[name as keyof FilterState] === value
                             ? 'tabSortActive text-primary'
                             : 'text-black'
                         }
                    `}
            >
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
