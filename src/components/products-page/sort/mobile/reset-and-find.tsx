import { useAppDispatch, handleMobileFilter, handleProductLoading, resetState } from "@redux"
import { useRouter } from "next/navigation";

const ResetAndFind = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(handleProductLoading(true));
    dispatch(resetState());
    dispatch(handleMobileFilter(false));
    router.push('/products');
  }

  return (
    <div className='flex justify-between p-2 absolute bottom-0 w-full shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-white '>
        <button onClick={handleReset} className='border border-primary rounded py-2 px-4 font-bold text-primary'>
            Reset
        </button>
        
        <button onClick={() => dispatch(handleMobileFilter(false))} className='rounded bg-primary/80 py-2 px-4 text-bold text-white w-[calc(100%-90px)]'>
            Find
        </button>
    </div>
  )
}

export default ResetAndFind