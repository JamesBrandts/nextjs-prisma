import { getPosts } from "./api/models/post"
import type { Post } from "./api/models/post"

export default async function Posts() {
  const posts: Post[] = await getPosts()
  return (
    <main>
        {posts.map((post: any) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
    </main>
  )
}
