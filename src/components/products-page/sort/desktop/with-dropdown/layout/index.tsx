"use client";

import { AiOutlineUp } from 'react-icons/ai';
import Dropdown from './dropdown';
import { useAppDispatch, useAppSelector, handleFilterDropdown } from '@redux';
import { SortLayoutProps } from "@types";

const Layout: React.FC<SortLayoutProps> = ({options}) => {
    const {name, selection, selectedValue} = options;
    const { items, placeholder, queryName } = selection;

    const { filterDropdown, pageLoading } = useAppSelector((state) => state.layout);
    const dispatch = useAppDispatch();

  return (  
    <div className='relative flex flex-col p-2 border-b gap-1 text-sm'>
        <h4 className='font-medium'> {placeholder} </h4>

        { pageLoading ? (
            <>
              <div className='animate-pulse w-full bg-slate-200 h-9 rounded-md' />
            </>
        ) : (
            <div className={`flex items-center justify-between border rounded-md text-gray-600 text-md font-semibold cursor-pointer py-2 px-4 `}
                onClick={() => dispatch(handleFilterDropdown(name))}
            >
                <p className=''> 
                    {!selectedValue ? 'All' : selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)} 
                </p>
                <AiOutlineUp className={`transition-all duration-300 ${filterDropdown === name ? '' : '-rotate-180'}`} />
            </div>
        )}

        { filterDropdown === name && (
            <>
                <div className={`tooltip `} />
                <Dropdown name={name} items={items} queryName={queryName} />
            </>
        ) }
    </div>         
  )
}

export default Layout