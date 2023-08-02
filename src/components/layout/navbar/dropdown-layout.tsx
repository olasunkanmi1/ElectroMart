import Link from 'next/link'
import { NavbarDropdownLayoutProps } from "@types";
import { useAppDispatch, useAppSelector, handleNavbarDropdown } from '@redux';
import {AiOutlineDown} from 'react-icons/ai'

const DropdownLayout: React.FC<NavbarDropdownLayoutProps> = ({ options: { name, links, icon } }) => {
    const { navbarDropdown } = useAppSelector((state) => state.layout);
    const dispatch = useAppDispatch();

  return (
    <div className='relative hidden sm:flex'>
        <button 
        className={`
          fcc gap-1 outline-none transition ease-in-out duration-300 hover:text-primary hover:font-semibold 
          ${ navbarDropdown === name ? 'text-primary font-semibold' : '' }
          ${ name === 'Help' ? 'w-[85px]' : 'w-[115px]' }
        `}
          onClick={() => dispatch(handleNavbarDropdown(name))}
        > 
          {icon} 
          <span className='fcc gap-1 translate-y-[2px]'> 
            {name} 
            <AiOutlineDown size={13} className={`transition ease-in-out duration-300 ${navbarDropdown === name ? 'scale-y-[-1]' : ''} `} />
          </span> 
        </button>

        { navbarDropdown === name && (
            <div className='flex flex-col absolute top-[40px] right-0 rounded bg-white shadow-custom w-[200px] overflow-hidden'>
                { links.map(({title, url}) => (
                    <Link key={url} href={url} className='p-2 hover:bg-gray-200 hover:font-medium transition ease-in-out'> { title } </Link>
                )) }
            </div>
        ) }
    </div>
  )
};

export default DropdownLayout;