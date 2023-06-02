"use client";

import Header from "@/molecules/Layout/Header";
import {ReactElement} from "react";
import Footer from "@/molecules/Layout/Footer";
import MenuPopup from "@/organisms/MenuPopup";
import {AppProvider} from "@/contexts/appContext";
import SearchPopup from "@/organisms/SearchPopup";

type Props = {
  children : ReactElement;
}

const Layout = ({children} : Props) => {
  return(
    <AppProvider>
      <Header />
      <main className={'px-[20px] lg:px-[40px] min-h-screen'}>
        {children}
        <MenuPopup />
        <SearchPopup />
      </main>
      <Footer />
    </AppProvider>

  )
}
export default Layout