import Link from "next/link"
import { SignIn, SignOut } from "@phosphor-icons/react/dist/ssr"
import { authUserSession } from "@/app/libs/auth-libs";

const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "Sign In" : "Sign Out"
    const actionIcon = user ? <SignOut className="mt-1 mr-1" size={24} /> : <SignIn className="mt-1 mr-1" size={24} />
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="xl:fixed right-10 2xl:top-6 xl:top-[14px] z-50 invisible xl:visible">
            <div className="border border-colos-sidebarColor dark:border-colos-accent w-12 h-10 bg-colos-accent dark:bg-colos-primary rounded-lg hover:bg-colos-SidebarAccent hover:w-12 hover:h-10 hover:rounded-lg hover:text-colos-accent ease-in-out dark:hover:bg-colos-SidebarAccent dark:hover:w-12 dark:hover:h-10 dark:hover:rounded-lg dark:hover:text-colos-accent dark:ease-in-out shadow-lg hover:ease-in-out Dashboard-card">
                <div className="text-lg ml-2 mt-1">
                  <Link className="flex-row flex"  href={actionURL}>
                     {actionIcon}
                     <h3 className="xl:hidden block">{actionLabel}</h3>
                  </Link>
                </div>
               
            </div>
        </div>
    )
}

export default UserActionButton