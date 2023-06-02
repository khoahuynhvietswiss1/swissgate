import Link from "next/link";
import Svg from "@/atoms/Svg";
import IconButton from "@/atoms/IconButton";
import ChangeLanguage from "@/molecules/ChangeLanguage";
import {useContext} from "react";
import AppContext from "@/contexts/appContext";
import {twMerge} from "tailwind-merge";

const PopupHeader = ({classChangeLanguage,className,displayChangeLanguage = false} : {classChangeLanguage? : string,className? : string,displayChangeLanguage? : boolean}) => {
  const ctx = useContext(AppContext)
  return(
    <>
      <div className={twMerge('grid grid-cols-2 lg:grid-cols-3 items-center justify-between mb-[55px]',className)}>
        <Link className={'flex-1'} href={"/"}>
          <Svg className={'w-[167px] lg:w-[267px]'} icon={'logo'} />
        </Link>
        {displayChangeLanguage && <ChangeLanguage className={twMerge('max-lg:hidden flex-1 justify-center', classChangeLanguage)}/>}
        <IconButton onClick={()=>ctx?.updateState({isMenuOpen : false,isSearchOpen: false})} variant={'primary'} classContainer={'w-full flex-1 justify-end'} classButton={'w-[42px] h-[42px]'} classIcon={'w-[20px]'} icon={'cross'} />
      </div>
    </>
  )
}

export default PopupHeader