import { PrismaClient } from '@prisma/client'
import type { Post } from '@prisma/client'
const prisma = new PrismaClient()

export default async function PostsList() {
  const posts: Post[] = await prisma.post.findMany()
  return (
    <div>
      <h1 className='text-4xl'>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h3 className='text-xl'>{post.title}</h3>
            <hr className='py-2'/>
            <p>{post.content}</p>
            <hr className='py-4'/>
          </li>
        ))}
      </ul>
    </div>
  )
}
