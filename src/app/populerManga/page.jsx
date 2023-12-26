"use client"

import React, { useEffect, useState } from "react";
import HeaderMenu from "../../components/Utilities/HeaderMenu";
import Pagination from "../component/Utilities/Pagination";
import AnimeList from "../component/AnimeList";
import { getAnimeResponse } from "../libs/api-libs";

const Page = async () => {
    const [page, setPage] = useState(1)
    const [topManga, setTopManga] = useState([])

    if (page < 1) {
        setPage(1)
    }

    const fetchData = async() => {
        
    const populerManga = await getAnimeResponse("top/manga", `page=${page}`)
    setTopManga(populerManga)

    }

    useEffect(() => {
        fetchData()
    }, [page])

    
    return (
        <>
        <HeaderMenu title={`MANGA TERPOPULER #${page}🔥`}/>
        <AnimeList api={topManga}/>
        <Pagination 
        page={page}
        lastPage={topManga.pagination?.last_visible_page}
        setPage={setPage}/>
        </>
    );
};

export default Page