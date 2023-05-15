import { PrismaClient } from '@prisma/client'
import type { Post } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Page() {
  return (
    <div className=''>
      <main className='flex flex-col gap-4 justify-between h-full'>
        <h1 className='text-4xl'>Index Page</h1>
      </main>
    </div>
  )
}
