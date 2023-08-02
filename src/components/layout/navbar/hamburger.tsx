
const Hamburger = () => {
  const isSidebarOpen = false;

  return (
    <div className="sm:hidden flex items-center relative w-[40px] h-[32px] cursor-pointer"
        onClick={() => {}}
    >
      <span className={`hamburgerSpan top-0 left-0 w-1/2 ${isSidebarOpen && 'origin-top-left translate-x-[calc(40px*.17)] rotate-45'}`} />
        <span className={`hamburgerSpan top-[50%] left-0 w-full translate-y-[-50%] ${isSidebarOpen && '-translate-y-[50%] -rotate-45'}`} />
        <span className={`hamburgerSpan bottom-0 right-0 w-1/2 ${isSidebarOpen && 'origin-bottom-right translate-x-[calc(-1*calc(40px*.17))] rotate-45'}`} />
    </div>
  )
}

export default Hamburger