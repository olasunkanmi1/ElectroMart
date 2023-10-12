import Image from "next/image";
import { appstore, googleplay } from "@public"

const Buttons = () => {
    const links = [appstore, googleplay];

  return (
    <div className='flex justify-between sm:justify-start space-x-4'>
        { links.map((link, i) => (
            <div key={i} className='relative transition ease-in-out hover:scale-95 duration-500 w-[180px] h-[58px] cursor-pointer'> 
                <Image src={link} alt='store' fill priority />
            </div>
        )) }
    </div>
  )
}
export default Buttons