import React from 'react'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts()

  return (
    <Layout hero={true}>
      {posts.length === 0 ? (
        <div className="grid grid-cols-1 gap-2">
          <div className="col-span-1 text-gray-600 dark:text-gray-400">
            <p>No posts yet.</p>
          </div>
        </div>
      ) : (
        posts.map((post) => {
          const [year, month, day] = post.date.split('-')
          const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })

          return (
            <div key={post.slug} className="grid grid-cols-1 sm:grid-cols-12 gap-2 mb-2">
              <div className="sm:col-span-9">
                <Link href={`/${year}/${month}/${day}/${post.slug}`} className="text-primary hover:underline">
                  {post.title}
                </Link>
              </div>
              <div className="sm:col-span-3 text-gray-600 dark:text-gray-400 sm:text-right">
                <small>{formattedDate}</small>
              </div>
            </div>
          )
        })
      )}
    </Layout>
  )
}
