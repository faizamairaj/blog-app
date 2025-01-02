import { notFound } from 'next/navigation';
import { getPostById } from '../../lib/post';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Comments from '@/app/components/comments/page';

export interface PostProps {
  params?: Promise<{ id: string }>;
  searchParams?: Promise<Record<string, string>>; 
}

export default async function Post({ params }: PostProps) {
  try {
   
    const resolvedParams = await params;

    console.log("Resolved params:", resolvedParams);

    if (!resolvedParams || !resolvedParams.id) {
      console.error("params or params.id is undefined.");
      notFound();
      return null;
    }

    const postId = parseInt(resolvedParams.id);

    // Check if the postId is a valid number
    if (isNaN(postId)) {
      console.error("Invalid ID:", resolvedParams.id);
      notFound();
      return null;
    }

    // Fetch the post using the postId
    const post = await getPostById(postId);

    // If the post is not found, show the 404 page
    if (!post) {
      notFound();
      return null;
    }

    return (
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-64 md:h-96 relative">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"     
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-3xl text-center font-bold mb-4 text-blue-900">{post.title}</h1>
          <p className="text-gray-600 mb-8 text-center">{post.content}</p>
          <div className="text-sm text-gray-500">Published on: {new Date(post.date).toLocaleDateString()}</div>
         {/*  <Comments /> */}
          <Comments />

          <div className="flex justify-end">
            <Link href="/blog">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-2">
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error while processing the post:", error);
    notFound();
    return null;
  }
}
