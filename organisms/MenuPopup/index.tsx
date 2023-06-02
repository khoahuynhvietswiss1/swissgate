"use client";

import {createPortal} from "react-dom";
import {twMerge} from "tailwind-merge";
import {useContext, useEffect, useMemo, useRef} from "react";
import AppContext from "@/contexts/appContext";
import Link from "next/link";
import Svg from "@/atoms/Svg";
import IconButton from "@/atoms/IconButton";
import Text from "@/atoms/Text";
import content from '@/data/PopupContent.json'
import IconText from "@/atoms/IconText";
import {IconType} from "@/types";
import MenuIcon from "@/molecules/Icon/Menu";
import ListSocial from "@/molecules/Icon/ListSocial";
import ChangeLanguage from "@/molecules/ChangeLanguage";
import PopupHeader from "@/molecules/Popup/Header";

type Content = {
  icon: {
    name: IconType;
    title: string
  },
  links: {
    title: string,
    href: string
  }[]
}

const MenuPopup =() => {
  const ctx = useContext(AppContext)
  const refContent = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    if(refContent.current){
      if(ctx?.isMenuOpen){
        refContent.current.style.opacity = "1";
        document.body.style.overflow = 'hidden'
      }
      else{
        refContent.current.style.opacity = "0";
        document.body.style.overflow = ''
      }
    }
  },[ctx?.isMenuOpen])



  const ContentPopup = useMemo(() => {
    return(
      <div ref={refContent} className={'transition-all duration-500 opacity-0 delay-500'} >
        <div className={'my-[60px] lg:hidden flex justify-between'}>
          <ChangeLanguage />
          <IconButton variant={'primary'} classIcon={'w-[27px]'} classButton={'w-[54px] h-[54px]'} icon={'phone'} />
        </div>
        <div className={twMerge(
          'flex max-lg:flex-col text-white gap-[40px] ',
        )}>
          <div className={'lg:basis-4/6'}>
            {
              content && (content as Content[]).map((item: Content,index: number)=>
                <div className={
                  'flex max-lg:flex-col lg:gap-10 lg:gap-[75px] w-full items-start border-b-2 border-b-primary pb-[20px] mb-[20px]'
                } key={index}>
                  <div className={'lg:basis-2/5'}>
                    <MenuIcon icon={item.icon.name} text={item.icon.title} classIconContainer={'bg-transparent'} />
                  </div>
                  <ul className={'max-lg:pl-[72px] lg:basis-3/5 lg:pt-[10px]'}>
                    {
                      item.links.map((link,index2)=>
                        <li key={index+'_'+index2}>
                          <Text className={'leading-[32px]'} size={'sm'} font={'int'}>
                            <Link className={'hover:text-primary'} href={link.href}>{link.title}</Link>
                          </Text>
                        </li>
                      )
                    }

                  </ul>
                </div>
              )
            }
          </div>
          <div className={'lg:basis-2/6 '}>
            <div className={'flex flex-col max-lg:flex-col-reverse max-lg:gap-10'}>
              <div className={'border-r-2 border-b-2 border-primary mb-[25px]'}>
                <ul className={'pb-[25px]'}>
                  <li>
                    <Text className={'leading-[32px]'} size={'xs'} font={'int'}>
                      <Link className={'hover:text-primary'} href={'/'}>FAQ</Link>
                    </Text>
                  </li>
                  <li>
                    <Text className={'leading-[32px]'} size={'xs'} font={'int'}>
                      <Link className={'hover:text-primary'} href={'/'}>Kontakt</Link>
                    </Text>
                  </li>
                  <li>
                    <Text className={'leading-[32px]'} size={'xs'} font={'int'}>
                      <Link className={'hover:text-primary'} href={'/'}>AGB</Link>
                    </Text>
                  </li>
                  <li>
                    <Text className={'leading-[32px]'} size={'xs'} font={'int'}>
                      <Link className={'hover:text-primary'} href={'/'}>Datenschutzerklärung</Link>
                    </Text>
                  </li>
                  <li>
                    <Text className={'leading-[32px]'} size={'xs'} font={'int'}>
                      <Link className={'hover:text-primary'} href={'/'}>Impressum</Link>
                    </Text>
                  </li>
                </ul>
              </div>
              <div className={'border-r-2 border-b-2 border-primary  pr-[20px] flex flex-col'}>
                <Text size={'sm'} font={'int'}>
                  Marken
                </Text>
                <Link href={"/"} className={'group mx-auto border-b-2 border-b-primary w-full py-[40px]'}>
                  <Svg className={'group-hover:fill-primary flex justify-center w-full'} icon={'cbuy'} />
                </Link>
                <Link href={"/"} className={'group mx-auto border-b-2 border-b-primary w-full py-[40px]'}>
                  <Svg className={'group-hover:fill-primary flex justify-center w-full'} icon={'herbalea'} />
                </Link>
                <Link href={"/"} className={'group mx-auto w-full text-center py-[40px]'}>
                  <Svg className={'group-hover:fill-primary flex justify-center w-full'} icon={'donald'} />
                </Link>
              </div>
            </div>
            <ListSocial className={'mt-[25px] lg:mt-[60px]'} />
          </div>
        </div>
      </div>

    )
  },[ctx?.isMenuOpen])


  return(
    <>
      {typeof document !== 'undefined' && createPortal(
        <div className={
          twMerge(
            'fixed inset-0 transition-all duration-500 bg-black z-10 py-[20px] lg:py-[35px] px-[20px] lg:px-[40px] overflow-auto',
            ctx?.isMenuOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <PopupHeader displayChangeLanguage />
          {ContentPopup}
        </div>
        ,document.body)}
    </>

  )
}

export default MenuPopup