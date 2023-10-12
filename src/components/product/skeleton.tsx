import { useAppSelector } from '@redux'
import { usePathname } from 'next/navigation';

const Skeleton = ({homepage}: {homepage?: boolean}) => {
  const pathname = usePathname();
  const { isList } = useAppSelector(({layout}) => layout)

  return (
    <div className={`rounded-md shadow-custom animate-pulse ${isList && pathname !== '/' ? 'ls:flex' : homepage ? '!min-w-[280px]' : ''}`}>
        <div className={`bg-slate-200 h-[200px] ${isList && pathname !== '/' ? 'ls:w-1/2' : ''}`} />

        <div className={`p-2 flex flex-col justify-between ${isList && pathname !== '/' ? 'ls:w-1/2' : '!h-[114px]'}`}>
            { [...Array(isList ? 6 : 2)].map((_, i) => ( <div key={i} className='bg-slate-200 h-[17px] w-full' /> )) } 
            
            <div className='flex justify-between items-center'>
                { [...Array(2)].map((_, i) => ( <div key={i} className=' bg-slate-200 h-[15px] w-[45px] ls:w-[60px]' /> )) }             
            </div>

            { homepage ? (
              <div className='bg-slate-200 h-[13px] w-[100px]' />
              ) : (
              <div className='bg-slate-200 h-[20px] w-full' />
            ) }

        </div>
    </div>
  )
}

export default Skeleton