import {twMerge} from "tailwind-merge";
import {TextType} from "@/types/Text";


const Text = ({ children, renderAs = 'span', className,size,font }: TextType) => {
  const Element = renderAs;

  const renderSize : () => string = () : string => {
    switch (size){
      case 'xs':
        return 'text-[20px] leading-[25px] font-normal'
      case 'sm':
        return 'text-[25px] leading-[28px] font-normal'
      case 'lg':
        return 'text-[65px] leading-[72px] font-normal'
      case 'xl':
        return 'text-[75px] leading-[83px] font-normal'
      default:
        return 'text-[35px] leading-[45px] font-normal'
    }
  }

  return(
    <Element
      className={twMerge('whitespace-pre-line',renderSize(),font === 'int' ? 'font-int' : 'font-neue',className)}
    >
      {children}
    </Element>
  )
}

export default Text