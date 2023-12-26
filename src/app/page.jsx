// "use client"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import {  getAnimeResponse, getNestedAnimeResponse, reproduce } from "./libs/api-libs"
import AnimePoster from "@/components/AnimeList/PosterAnime"

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12")
  const topManga = await getAnimeResponse("top/manga")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 6)

  let recommendedManga = await getNestedAnimeResponse("recommendations/manga", "entry")
  recommendedManga = reproduce(recommendedManga, 6)

  return (
   <>
     {/* anime terpopuler*/}
     <section>
      <AnimePoster/>
      <Header title="Paling Populer🔥" linkTitle="Lihat Semua" linkHref="/populer" />
      <AnimeList api={topAnime}/>
     </section>

     {/* Rekomendasi anime*/}
     <section>
      <Header title="Rekomendasi Anime"/>
      <AnimeList api={recommendedAnime}/>
     </section>

   </>
  )
}

export default Page