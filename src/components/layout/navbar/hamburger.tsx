import { useAppSelector, useAppDispatch, handleSidebar } from '@redux';

const Hamburger = () => {
  const {sidebar} = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  return (
    <div className={`sm:hidden flex items-center tham tham-e-spin tham-w-8 hover:!opacity-100 ${ sidebar ? 'tham-active' : '' }`}
        onClick={() => dispatch(handleSidebar(!sidebar))}
    >
      <div className="tham-box">
        <div className="tham-inner bg-primary" />
      </div>
    </div>
  )
}

export default Hamburger