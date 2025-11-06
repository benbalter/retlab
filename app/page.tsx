import React from 'react'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'

export default function Home() {
  const posts = getAllPosts()

  return (
    <Layout hero={true}>
      {posts.length === 0 ? (
        <div className="row mb-2">
          <div className="col-12 text-muted">
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
            <div key={post.slug} className="row mb-2">
              <div className="col-sm-9">
                <Link href={`/${year}/${month}/${day}/${post.slug}`}>
                  {post.title}
                </Link>
              </div>
              <div className="col-sm-3 text-muted text-md-end">
                <small>{formattedDate}</small>
              </div>
            </div>
          )
        })
      )}
    </Layout>
  )
}
