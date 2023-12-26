import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'
import React from 'react'
import Link from "next/link"
import Header from '@/components/Dashboard/Header'
import Image from 'next/image'

const Comment = async () => {
    const user = await authUserSession()
    // console.log(user)
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } })

    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"Komentar Saya"} />
            <div className='grid md:grid-cols-4 py-4 gap-4'>
                {comments.map(comment => {
                    console.log(comment)
                    return (
                        <Link
                            href={`/anime/${comment.anime_mal_id}`}
                            key={comment.id}
                            className='text-color-dark bg-color-primary p-4 border border-colos-primary rounded-xl'
                        >
                            <div className='flex flex-row gap-4 md:py-8 py-4 px-6 md:px-6'>
                                <div className='flex items-start justify-start'>
                                     <Image src={user.image} alt='' width={50} height={50} className='w-[5rem] rounded-full'></Image>
                                </div>
                            <p className='font-sans font-extrabold 2xl:text-xl text-center justify-center items-center flex'>@{comment.username}</p>
                            </div>
                            <div className='px-8 py-2'>
                                <p className='font-sans 2xl:text-xl'>{comment.comment}</p>
                            </div>
                            
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Comment