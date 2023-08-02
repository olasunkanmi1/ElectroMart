import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { SortLayoutProps } from "@types";
import { useAppDispatch, useAppSelector, handleProductLoading, handleFilterChange } from "@redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { findProducts } from '@utils';

const Layout: React.FC<SortLayoutProps> = ({options}) => {
    const {name, selection, selectedValue} = options;
    const { items, placeholder, queryName } = selection;

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const { productLoading } = useAppSelector((state) => state.layout);


    const handleSelect = (value: string) => {
        dispatch(handleProductLoading(true));
        dispatch(handleFilterChange({ name, value }));
        
        findProducts({ [queryName]: value }, router, pathname, searchParams);
      };

  return (
    <div className='flex flex-col p-2 border-b border-white gap-2 text-sm'>
        <div className='flex items-center justify-between'>
            <h4 className='font-medium'> {placeholder} </h4>
            <button className='font-medium text-primary'> RESET </button>
        </div>

        { productLoading ? (
            [...Array(items.length)].map((_, i) => (
                <div className='flex gap-2' key={i}>
                    <div className='animate-pulse w-5 h-5 rounded-full bg-gray-400' />
                    <div className='animate-pulse bg-gray-400 h-4 w-[calc(100%-30px)]' />
                </div>
            ))
        ) : (
            items.map(({name: title, value}) => {
                return (
                    <div key={title}
                        className={`flex items-center gap-2
                                ${selectedValue === value ? 'text-primary' : 'text-black'}
                        `} 
                    >
                        <input type='checkbox' id={title} 
                        onChange={() => handleSelect(value)}
                            className='fcc appearance-none w-5 h-5 cursor-pointer rounded-full outline-none border border-black checked:bg-primary/80 checked:border-primary/80' 
                            checked={selectedValue === value}
                        />
                        <label htmlFor={title} className='flex items-center cursor-pointer'>
                            { name === 'rating' ? (
                                <>
                                    {[...Array(parseInt(title))].map((_, i) => (
                                        <AiFillStar key={i} size={20} className='text-primary/80' />
                                    ))}
                                    {[...Array(5 - parseInt(title))].map((_, i) => (
                                        <AiOutlineStar key={i} size={20} className='text-primary/80' />
                                    ))}
            
                                    <span className='ml-1'> & above </span> 
                                </>
                            ) : (
                                <>
                                    { title }
                                </>
                            ) }
                        </label>
                    </div>
                )
            })     
        )}

    </div> 
  )
}

export default Layout