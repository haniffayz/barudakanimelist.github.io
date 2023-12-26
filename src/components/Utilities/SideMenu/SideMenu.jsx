import Link from "next/link"
import { BookmarkSimple, Fire, House, CalendarCheck, UserCircle } from "@phosphor-icons/react/dist/ssr"

const SideMenu = () => {
    return (
        <div className="shadow-xl fixed w-full h-14 bg-colos-accent dark:bg-colos-DarkInfo bottom-0 md:hidden block z-50">
            <div className="flex flex-row justify-center items-center gap-8 pt-3">
                <div className="">
                    <Link href={'/users/dashboard'}>
                        <UserCircle size={34} />
                    </Link>
                </div>
                <div className="">
                    <Link href={'/populer'}>
                        <Fire size={32} />
                    </Link>
                </div>
                <div className="">
                    <Link href={'/'}>
                        <House className="text-colos-SidebarAccent " size={32} color="#ff9000" weight="fill"/>
                    </Link>
                </div>
                <div className="">
                    <Link href={'/'}>
                        <CalendarCheck size={32} />
                    </Link>
                </div>
                <div className="">
                    <Link href={'/users/dashboard/collection'}>
                        <BookmarkSimple size={32} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SideMenu