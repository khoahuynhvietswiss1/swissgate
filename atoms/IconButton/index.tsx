import {IconType} from "@/types";
import {twMerge} from "tailwind-merge";
import Svg from "@/atoms/Svg";

type Props = {
  icon: IconType;
  classIcon? : string;
  classButton? : string;
  variant? : 'primary' | 'black'
  onClick? : any;
  classContainer? : string;
  haveHover?: boolean;
}
const IconButton = ({
  icon,
  classButton = '',
  classIcon = '',
  classContainer = '',
  haveHover = false,
  onClick,
  variant,
} : Props) => {
  return(
    <div
      className={
        twMerge(
          'rounded-full ',
          haveHover ? 'relative z-2 relative group ' : 'flex items-center justify-center',
          classContainer
        )
      }
      onClick={onClick ? onClick : ()=>{}}
    >
      {
        haveHover &&  <div className={`absolute top-[0] left-[0] transition-all duration-300 opacity-0 group-hover:opacity-10 rounded-full z-0 bg-black w-full h-full`}></div>
      }
      <button type={'button'} className={twMerge(
        haveHover ? `absolute top-[5px] left-[5px] w-max h-max p-[10px] rounded-full ` : 'w-full h-full rounded-full',
        variant === 'primary' ? 'bg-primary' : 'bg-black',classButton)}
      >
        <Svg icon={icon} fillTransparent={false} className={twMerge('fill-white text-center mx-auto',classIcon)} />
      </button>
    </div>

  )
}
export default IconButton