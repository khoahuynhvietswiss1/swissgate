'use client';

import Svg from "@/atoms/Svg";
import IconButton from "@/atoms/IconButton";
import Link from "next/link";
import {IconType} from "@/types";
import homeMenu from "@/data/HomeMenu.json";
import IconText from "@/atoms/IconText";
import {useContext} from "react";
import AppContext from "@/contexts/appContext";
import MenuIcon from "@/molecules/Icon/Menu";

type HomeMenu = {
  text: string;
  icon: IconType
}

const Header = () => {
  const ctx = useContext(AppContext)

  const openMenu = () => {
    ctx?.updateState({
      isMenuOpen: true,
      isSearchOpen: false
    })
  }

  const openMenuSearch = () => {
    ctx?.updateState({
      isSearchOpen: true,
      isMenuOpen: true
    })
  }

  return(
    <>
      <header className={'w-full py-[20px] lg:py-[35px] px-[20px] lg:px-[40px] '}>
        <div className={'w-full flex items-center justify-between'}>
          <Link href={"/"}>
            <Svg className={'w-[167px] lg:w-[267px]'} icon={'logo'} />
          </Link>
          <div className={'flex gap-[45px] items-center'}>
            <IconButton
              classContainer="w-[52px] h-[52px] max-lg:hidden"
              classIcon="w-[22px] h-[22px]"
              icon="search"
              variant="black"
              onClick={openMenuSearch}
              haveHover
            />
            <Svg
              icon={'hamburger'}
              className={'w-[35px] lg:w-[54px] cursor-pointer'}
              onClick={openMenu}
            />
          </div>
        </div>

        <div className={'w-full items-center justify-between hidden xl:flex lg:mt-[50px] flex-wrap gap-y-[50px]'}>
          {
            homeMenu && (homeMenu as HomeMenu[]).map((item,index)=>  <MenuIcon key={index} haveHover={true} icon={item.icon} text={item.text} />)
          }
        </div>
      </header>

    </>

  )
}
export default Header