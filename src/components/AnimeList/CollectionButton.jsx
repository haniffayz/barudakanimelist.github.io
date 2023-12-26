"use client"

import React, { useState } from 'react'
import { BookmarkSimple } from '@phosphor-icons/react/dist/ssr'
import { Bookmark } from '@phosphor-icons/react/dist/ssr'

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
        }
        return
    }

    return (
        <>
            {
                isCreated 
                ? 
                <button
                className="md:py-1 my-4 md:my-0 bg-color-accent border dark:border-colos-accent border-colos-primary 2xl:w-52 2xl:h-16 xl:w-40 xl:h-12 w-full h-12 rounded-xl hover:bg-colos-SidebarAccent hover:text-colos-accent animation">
                    <div className='relative flex items-center text-center md:p-2 pl-16'>
                        <Bookmark size={32} className="absolute 2xl:text-xl xl:text-lg"/>
                        <h1 className='absolute ml-10 2xl:text-lg xl:text-sm'>Ditambahkan!</h1>
                    </div>
            </button>
                :
                <button
                    onClick={handleCollection}
                    className="md:py-1 my-4 md:my-0 bg-color-accent border dark:border-colos-accent border-colos-primary 2xl:w-52 2xl:h-16 xl:w-40 xl:h-12 w-full h-12 rounded-xl hover:bg-colos-SidebarAccent hover:text-colos-accent animation">
                        <div className='relative flex items-center text-center md:p-2 pl-16'>
                            <BookmarkSimple size={32} className="absolute 2xl:text-xl xl:text-lg"/>
                            <h1 className='absolute ml-10 2xl:text-lg xl:text-sm'>Tambah Koleksi</h1>
                        </div>
                </button>
                }
        </>
    )
}

export default CollectionButton