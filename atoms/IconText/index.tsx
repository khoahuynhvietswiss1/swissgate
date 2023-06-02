import {IconType} from "@/types";
import Svg from "@/atoms/Svg";
import {twMerge} from "tailwind-merge";
import Text from "@/atoms/Text";
import {ReactElement} from "react";
import {TextFontType, TextSizeType} from "@/types/Text";

type Props = {
  icon : IconType;
  font : TextFontType;
  size : TextSizeType;
  classIcon? : string;
  classText? : string;
  classContainer? : string;
  classIconContainer? : string;
  children : ReactElement | string;
  haveHover?: boolean;
}

const IconText = ({icon,font,size,haveHover,classIcon = '',classIconContainer = '',classText = '', classContainer = '',children} : Props) => {
  return(
    <div className={twMerge('flex gap-[18px] items-center cursor-pointer group relative h-max pr-[20px]',classContainer)}>
      {haveHover && <div className={'absolute transition-all duration-500 group-hover:opacity-100 opacity-0 group-hover:bg-primary group-hover:rounded-full w-full h-full left-0 top-0'}></div>}
      <div className={twMerge('relative w-[54px] h-[54px] border border-2 border-primary rounded-full bg-white',classIconContainer)}>
        <Svg fillTransparent icon={icon} className={twMerge(
          'text-primary flex h-full items-center justify-center',
              classIcon)} />
      </div>
      <div className={'relative'}>
        <Text font={font} size={size} className={twMerge('text-primary relative z-[1]',haveHover ? 'transition-all duration-500 group-hover:text-white' : '',classText)}>
          {children}
        </Text>
      </div>

    </div>
  )
}
export default IconText