import IconButton from "@/atoms/IconButton";
import {twMerge} from "tailwind-merge";

const ListSocial = ({className = ''} : {className? : string}) => {
  return(
    <div className={twMerge('flex gap-[15px]',className)}>
      <IconButton variant={'primary'} classButton={'w-[42px] h-[42px]'} classIcon={'w-[11px]'} icon={'facebook'} />
      <IconButton variant={'primary'} classButton={'w-[42px] h-[42px]'} classIcon={'w-[18px]'} icon={'instagram'} />
      <IconButton variant={'primary'} classButton={'w-[42px] h-[42px]'} classIcon={'w-[18px]'} icon={'linkedin'} />
      <IconButton variant={'primary'} classButton={'w-[42px] h-[42px]'} classIcon={'w-[20px]'} icon={'youtube'} />
    </div>
  )
}
export default ListSocial