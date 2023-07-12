
const Skeleton = () => {
  return (
    <div className='h-[300px] shadow-custom animate-pulse'>
        <div className='bg-slate-200 h-[200px]' />

        <div className='p-2 flex flex-col justify-between h-[100px]'>
            { [...Array(2)].map((_, i) => ( <div key={i} className='bg-slate-200 h-[17px] w-full' /> )) } 
            
            <div className='flex justify-between items-center'>
                { [...Array(2)].map((_, i) => ( <div key={i} className=' bg-slate-200 h-[15px] w-[60px]' /> )) }             
            </div>

            <div className='bg-slate-200 h-[13px] w-[100px]' />
        </div>
    </div>
  )
}

export default Skeleton