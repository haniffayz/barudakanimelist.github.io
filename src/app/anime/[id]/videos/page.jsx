// "use client"
import Image from "next/image"
import Link from "next/link"
import { Star } from "@phosphor-icons/react/dist/ssr"

const   Videos = async({api}) => {

    // console.log(api.data.episodes)

    const sortedEpisodes = api.data.episodes?.sort((a, b) => a.mal_id - b.mal_id)


    return (
        <div className="left-0">
            <h1 className="md:text-4xl xl:text-xl 2xl:text-3xl text-2xl font-bold">Episode</h1>
               <div className="grid 2xl:grid-cols-7 xl:grid-cols-5 md:grid-cols-4 grid-cols-3 2xl:gap-12 xl:gap-28 md:p-6 md:gap-16 2xl:p-8 xl:pr-36 mt-2">
            {sortedEpisodes?.map((video, index)=> {
                // console.log(`ini adalah data dari ${video.mal_id}`)
                return(
                <Link href={video.url} target="blank" className="2xl:py-4 xl:py-0 md:py-4 py-4" key={index}>
                <div className="md:w-20 xl:w-[5.5rem] xl:h-24 w-[4rem] h-[4rem] md:h-20 rounded-xl border border-colos-primary shadow-xl dark:shadow-md dark:shadow-colos-accent bg-colos-accent  dark:bg-colos-DarkInfo dark:border-colos-accent hover:bg-colos-SidebarAccent transition-all ease-linear hover:text-colos-accent flex flex-col">
                    <h3 className="justify-center text-center md:p-6 p-2 items-center flex text-2xl relative font-sans">{video.mal_id}</h3>
                </div>
                </Link>
                )
            })}

                </div>
        </div>
    )
}

export default Videos