import {PrismaClient} from '@prisma/client'
import type {Post} from '@prisma/client'

export type {Post}

const prisma = new PrismaClient()

export function getPost(id: number): Promise<Post | null> {
    return prisma.post.findUnique({
        where: {
            id,
        },
    })
}

export function createPost(data: Post): Promise<Post> {
    return prisma.post.create({
        data,
    })
}

export function updatePost(id: number, data: Post): Promise<Post> {
    return prisma.post.update({
        where: {
            id,
        },
        data,
    })
}

export function deletePost(id: number): Promise<Post> {
    return prisma.post.delete({
        where: {
            id,
        },
    })
}

export function getPosts(): Promise<Post[]> {
    return prisma.post.findMany()
}

export async function createNewPost(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log({ event})
}
