import {twMerge} from "tailwind-merge";
import IconButton from "@/atoms/IconButton";
import Text from "@/atoms/Text";

const ChangeLanguage = ({className = '',classContainerButton = ''} : {className? : string,classContainerButton? : string}) => {
  return(
    <div className={twMerge('flex items-center gap-[10px] text-white ',className)}>
      <IconButton variant={'primary'} classContainer={twMerge(classContainerButton)} classButton={'w-[42px] h-[42px]'} classIcon={'w-[27px]'} icon={'world'} />
      <Text renderAs={'span'} font={'int'} size={'sm'}>DE</Text>
    </div>
  )
}

export default ChangeLanguage