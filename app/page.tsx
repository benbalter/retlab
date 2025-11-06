import React from 'react'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'

export default function Home() {
  // In a real implementation, this would fetch from a CMS or markdown files
  const posts = getAllPosts()

  return (
    <Layout hero={true}>
      {posts.map((post) => (
        <div key={post.slug} className="row mb-2">
          <div className="col-sm-9">
            <a href={post.url}>{post.title}</a>
          </div>
          <div className="col-sm-3 text-muted text-md-end">
            <small>{post.date}</small>
          </div>
        </div>
      ))}
    </Layout>
  )
}
