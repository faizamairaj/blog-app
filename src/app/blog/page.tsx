import Link from 'next/link'
import Image from 'next/image' 
import { getPosts } from '../lib/post'  


export default function Blog() {
   const posts = getPosts() 
   const featuredPost = posts[0]  

  return (
    <div className="space-y-12">
      <h1 className="text-5xl font-bold mb-8 text-center font-serif text-blue-900">Explore Our Blogs</h1>
      {/* Featured Post */}
     <section className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              width={800}
              height={500}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-blue-500 font-bold">Featured Post</div>
            <Link href={`/post/${featuredPost.id}`} className="block mt-1 text-2xl leading-tight font-bold text-blue-900">
              {featuredPost.title}
            </Link>
            <div className="mt-4">
              <Link href={`/post/${featuredPost.id}`} className="text-indigo-500 hover:text-indigo-600 font-medium">
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section> 

      {/* Other Posts */}
      <section>
       {/* <h2 className="text-4xl font-bold mb-8 text-center font-serif text-blue-900">Latest Blogs</h2> */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  <Link href={`/post/${post.id}`} className="text-blue-900 hover:text-indigo-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p> 
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <Link href={`/post/${post.id}`} className="text-indigo-500 hover:text-indigo-600 font-medium">
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}