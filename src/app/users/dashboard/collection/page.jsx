import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import { Bookmark } from "@phosphor-icons/react/dist/ssr";

const Page = async () => {
    const user = await authUserSession();
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email },
    });

    return (
        <section>
                 <div className="text-4xl font-bold flex flex-col">
                   <Header title={"My Collection"} />
                   <div className="py-4">
                     <div className="grid 2xl:grid-cols-6 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 md:gap-15 sm:gap-20 px-5">
                     {collection.map((collect, index) => {
                        return (
                     <Link href={`/anime/${collect.anime_mal_id}`} key={index} className="relative rounded-xl border-colos-primary">
                            <Image src={collect.anime_image} alt={collect.anime_image} width={250} height={350} className="max-h-64 md:max-h-[18rem] object-cover rounded-lg"></Image>
                            <div className="absolute right-0 mr-3 mt-4">
                              <Bookmark size={32} className="text-colos-SidebarAccent" />
                            </div>
                              <h3 className="font-bold md:text-sm xl:text-base 2xl:text-lg text-sm pl-4 pt-4 pb-4 pr-12">{collect.anime_title}</h3>
                        </Link>
                        )
                     })}
                        
                     </div>
                  </div>
                </div>
              </section>
    );
};

export default Page;
