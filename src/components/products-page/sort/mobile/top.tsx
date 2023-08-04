import { AiOutlineClose } from "react-icons/ai"
import { useAppDispatch, handleMobileFilter } from "@redux"

const Top = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex text-primary justify-between py-3 px-5'>
      <p className='font-semibold'>FILTERS</p>

      <AiOutlineClose size={25} onClick={() => dispatch(handleMobileFilter(false))} />
    </div>
  )
}

export default Top