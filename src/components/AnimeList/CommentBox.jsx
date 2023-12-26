import prisma from '@/libs/prisma'
import React from 'react'
import Image from 'next/image';
import { authUserSession } from '@/libs/auth-libs';

const CommentBox = async ({ anime_mal_id, user_image }) => {
    const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
    const user = await authUserSession()

    return (
        <div className='grid xl:grid-cols-1 mt-14 gap-8 mb-4'>
            {comments.map(comment => {
                return (
                    <div key={comment.id} className="text-color-dark bg-color-primary p-4 border border-colos-primary rounded-lg  dark:border-colos-accent">
                       <div className='flex flex-row gap-2 py-4 px-2'>
                            {/* <Image src={''} alt='' width={50} height={50} className='w-[5rem] rounded-full'></Image> */}
                            <p className='font-sans font-extrabold 2xl:text-xl text-center justify-center items-center flex'>@{comment.username}</p>
                            </div>
                            <div className='px-2'>
                                <p className='font-sans 2xl:text-xl'>{comment.comment}</p>
                            </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentBox