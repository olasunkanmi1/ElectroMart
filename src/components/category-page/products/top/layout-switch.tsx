import { FiGrid } from 'react-icons/fi'
import { FaList } from 'react-icons/fa'
import { useAppSelector, useAppDispatch, handleProductLayout } from '@redux';


const LayoutSwitch = () => {
    const {isList} = useAppSelector((state) => state.layout);
    const dispatch = useAppDispatch();

    const typeArr = [
        {value: true, icon: <FaList size={20} />},
        {value: false, icon: <FiGrid size={20} />},
    ]

    const handleSwitch = (value: boolean) => {
        dispatch(handleProductLayout(value))
    }

  return (
    <div className='flex w-fit border border-primary rounded-md p-1 cursor-pointer'>
        {typeArr.map(({value, icon}, i) => (
            <span key={i} className={`flex justify-center items-center p-1 ms:p-2 rounded ${isList === value ? 'bg-primary/80 text-white' : ''}`}
               onClick={() => handleSwitch(value)}            
            > 
               {icon} 
            </span>
        ))}
    </div>
  )
}

export default LayoutSwitch