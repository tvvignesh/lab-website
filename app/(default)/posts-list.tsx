import getAllPosts from '@/lib/getAllPosts'
import PostItem from './post-item'
import Newsletter from '@/components/newsletter'

interface Post {
  id: number,
  sticky: boolean,
  title: string,
  name: string,
  image: string,
  tag1: string,
  tag2: string,
  date: string,  
}

export default async function PostsList() {
  const postsData: Post[] = getAllPosts()
  const posts = postsData

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="text-3xl font-bold font-inter mb-10">Latest projects</h2>
      {/* List container */}
      <div className="flex flex-col">

        {posts.map(post => {
          return (
            <PostItem key={post.id} {...post} />
          )
        })}

        {/* Newletter CTA */}
        <div className="py-8 border-b border-gray-200 -order-1">
          <Newsletter />
        </div>

      </div>
    </div>
  )
}
