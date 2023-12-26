"use client"
import Link from "next/link"
import InputSearch from "./inputSearch"
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr"
import Theme from "@/components/theme/theme"
import { ThemeProvider } from "next-themes"
import AnimePoster from "../../AnimeList/PosterAnime" 
import SideBar from "../Sidebar/SideBar"

const Navbar = () => {
    return (
        <nav className="2xl:sticky sm:sticky lg:sticky xl:sticky bg-colos-accent dark:bg-colos-sidebarColor z-50"> 
            <div className="flex 2xl:p-4 md:p-2 p-4 md:flex-row flex-col justify-between md:items-center gap-4">
                <SideBar />
                <Link href="/" className="font-bold px-9 pb-4 md:px-0 md:pb-0 justify-center items-center 2xl:ml-7 xl:ml-12 md:ml-16 text-3xl title">BarudakAnimeList</Link>
                <InputSearch />

                <div className="hidden xl:flex md:right-24 xl:right-[6.5rem] absolute cursor-pointer">
                  <ThemeProvider enableSystem={true} attribute="class">
                     <Theme/> 
                 </ThemeProvider>
               </div>
               {/* <Link className="hidden xl:flex md:right-24 xl:right-[11.5rem] absolute cursor-pointer" href="/">
                <CalendarCheck size={40}/> 
               </Link> */}
            </div>
        </nav>
        
    )
}

export default Navbar