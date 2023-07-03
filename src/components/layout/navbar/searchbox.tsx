import {AiOutlineSearch} from 'react-icons/ai'

export default function Searchbox({className}: {className: string}) {
  return (
    <div className={`gap-2 md:w-fit ${className}`}>
        <div className="flex items-center border border-gray-500 h-[35px] ls:h-auto p-1 xls:p-2 rounded gap-1 w-[calc(100%-36px)] ls:w-[calc(100%-68px)] xls:w-[calc(100%-100px)] md:w-[400px]">
            <AiOutlineSearch size={25} className='text-gray-500 hidden ls:block' />
            <input placeholder='Search products and categories' className='outline-none w-full leading-none font-medium text-xs xls:text-base' />
        </div>

        <button className='px-2 xls:px-4 rounded bg-primary/80 hover:bg-primary/100 text-white btnAnimation text-xs xls:text-sm leading-[14px] font-medium'> 
          <AiOutlineSearch size={20} className='block ls:hidden' /> <span className='hidden ls:block'> SEARCH </span> 
        </button>
    </div>
  )
}