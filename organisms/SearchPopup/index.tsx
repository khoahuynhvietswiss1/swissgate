"use client";

import {createPortal} from "react-dom";
import {useContext, useEffect, useMemo, useRef} from "react";
import AppContext from "@/contexts/appContext";
import {twMerge} from "tailwind-merge";
import PopupHeader from "@/molecules/Popup/Header";
import Textarea from "@/atoms/Textarea";
import Input from "@/atoms/Input";

const SearchPopup = () => {
  const ctx = useContext(AppContext)
  const refContent = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    if(refContent.current){
      if(ctx?.isSearchOpen){
        refContent.current.style.opacity = "1";
        document.body.style.overflow = 'hidden'
      }
      else{
        refContent.current.style.opacity = "0";
        document.body.style.overflow = ''
      }
    }
  },[ctx?.isSearchOpen])

  const ContentPopup = useMemo(() => {
    return(
      <div ref={refContent} className={'w-full'}>
        <Input type={'text'} placeholder={'Investment...'} className={'w-full pt-[90px] pb-[75px] px-[20px] text-[75px] border-0 border-primary border-b-2 border-r-2 rounded-none'} name={'search'} />
      </div>
    )
  },[ctx?.isSearchOpen])

  return(
    <>
      {typeof document !== 'undefined'  && createPortal(<div className={
        twMerge(
          'fixed inset-0 transition-all duration-500 bg-white z-10 py-[20px] lg:py-[35px] px-[20px] lg:px-[40px] overflow-auto',
          ctx?.isSearchOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <PopupHeader className={'lg:grid-cols-2'} />
        {ContentPopup}
      </div>,document.body)}
    </>
  )
}
export default SearchPopup