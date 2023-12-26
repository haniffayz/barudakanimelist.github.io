"use client"
import { Binoculars, CalendarCheck, Fire, Gear, House, SignIn, Ticket, X, ChartBar, BookmarkSimple, ChatCircle } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"
import { List } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import Theme from "@/components/theme/theme"
import { ThemeProvider } from "next-themes"
import { useEffect } from "react"

const SideBar = () => {

    const [isOpen, setOpen] = useState(true)
    const OpenSideBar = () => {
    setOpen((prevState) => !prevState);
    
  }
  
    const ListButton = () => {
        return (
            <div className="cursor-pointer absolute left-6 md:block hidden">
                <List size={40}  onClick={OpenSideBar}/>
            </div>
        )
    }
    

const ButtonOpen = () => {
    return (
    <div className={`${isOpen ? "-left-96" : "left-0"} w-64 h-full fixed top-0 dark:bg-colos-sidebarColor bg-colos-accent bg-gray-900 shadow-xl z-[99999] transition-transform ease-in-out overflow-y-auto scroll-bar sideBar`}>

    <div className=" px-2.5 py-3 left-[24px] top-[24px] absolute rounded-lg justify-start items-center inline-flex">
      <div className="justify-start items-start inline-flex"></div>
        <div className="pl-5 text-start justify-start items-center flex">
            <div className="text-center text-xl font-bold font-['Ubuntu'] leading-none title">ACTION CENTER</div>
        </div>
    </div>
    <div className="h-[200px] p-2.5 left-[24px] top-[74px] absolute flex-col justify-start items-start gap-8 inline-flex">
        <a className="w-[200px] h-[150px] images-src" width={154} height={150} src=""></a>
    </div>

    <div className="left-[24px] top-[250px] absolute flex-col justify-start items-start inline-flex cursor-pointer">
      
        <div className="w-[212px] px-2.5 py-3 bg-amber-500 rounded-lg justify-start items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex"></div>
            <div className=" justify-start items-center flex flex-col"> 
                  <div className="text-start justify-center text-base font-normal font-['Ubuntu'] leading-none hover:bg-colos-SidebarAccent hover:w-48 hover:h-10 hover:rounded-xl hover:text-colos-accent ease-in-out">
                    <Link href={"/"}>
                      <House size={22} className="absolute mt-2 ml-5"></House>
                        <h1 className="justify-center mt-3 ml-12">Home</h1>
                    </Link>
                  </div>
                </div>
        </div>

        <div className="w-[212px] px-2.5 py-3 bg-amber-500 rounded-lg justify-start items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex"></div>
             <div className=" justify-start items-center flex flex-col">
                  <div className="text-start justify-center text-base font-normal font-['Ubuntu'] leading-none hover:bg-colos-SidebarAccent hover:w-48 hover:h-10 hover:rounded-xl hover:text-colos-accent ease-in-out">
                  <Link href="/users/dashboard">
                    <ChartBar size={22} className="absolute mt-2 ml-5"></ChartBar>
                      <h1 className="justify-center mt-3 ml-12">Dashboard</h1>
                  </Link>
              </div>
            </div>
        </div>

        <div className="w-[212px] px-2.5 py-3 bg-amber-500 rounded-lg justify-start items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex"></div>
            <div className=" justify-start items-center flex flex-col">
                  <div className="text-start justify-center text-base font-normal font-['Ubuntu'] leading-none hover:bg-colos-SidebarAccent hover:w-48 hover:h-10 hover:rounded-xl hover:text-colos-accent ease-in-out">
                    <Link href={'/populer'} >
                    <Fire size={22} className="absolute mt-2 ml-5"></Fire>
                        <h1 className="justify-center mt-3 ml-12">Populer</h1>
                    </Link>
                  </div>
                </div>
        </div>
        <div className="w-[212px] px-2.5 py-3 bg-amber-500 rounded-lg justify-start items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex"></div>
            <div className=" justify-start items-center flex flex-col">
                  <div className="text-start justify-center text-base font-normal font-['Ubuntu'] leading-none hover:bg-colos-SidebarAccent hover:w-48 hover:h-10 hover:rounded-xl hover:text-colos-accent ease-in-out">
                  <Link href="/schedules">
                  <CalendarCheck size={22} className="absolute mt-2 ml-5"></CalendarCheck>
                    <h1 className="justify-center mt-3 ml-12">Jadwal</h1>
                  </Link>
                  </div>
                </div>
        </div>
        
        <div className="w-[212px] px-2.5 py-3 bg-amber-500 rounded-lg justify-start items-center flex md:hidden">
            <div className="flex-col justify-start items-start inline-flex"></div>
             <div className=" justify-start items-center flex flex-col">
                  <div className="text-start justify-center text-base font-normal font-['Ubuntu'] leading-none hover:bg-colos-SidebarAccent hover:w-48 hover:h-10 hover:rounded-xl hover:text-colos-accent ease-in-out">
                    <Link href="/api/auth/signin">
                      <SignIn size={22} className="absolute mt-2 ml-5"></SignIn>
                       <h1 className="justify-center mt-3 ml-12">Sign In</h1>
                    </Link>
              </div>
            </div>
        </div>
    </div>
    
    <div className="bg-colos-accent w-10 rounded-md">
        <X size={40}  className="cursor-pointer fixed left-64 top-7 ml-1 rounded-lg w-14 h-10 bg-colos-accent dark:bg-colos-sidebarColor" onClick={OpenSideBar}/>
    </div>

    <div className="absolute bottom-0 right-0 mr-6 mb-2 xl:invisible visible md:mb-5">
      <div>
      <ThemeProvider enableSystem={true} attribute="class">
            <Theme/> 
      </ThemeProvider>
      </div>
    </div>

  </div>
    )
            
}
    return isOpen ? <ListButton /> : <ButtonOpen />
}



export default SideBar
