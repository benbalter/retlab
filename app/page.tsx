import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'

export default function Home() {
  // In a real implementation, this would fetch from a CMS or markdown files
  const posts = getAllPosts()

  return (
    <Layout hero={true}>
      {posts.map((post) => (
        <Row key={post.slug} className="mb-2">
          <Col sm={9}>
            <a href={post.url}>{post.title}</a>
          </Col>
          <Col sm={3} className="text-muted text-md-end">
            <small>{post.date}</small>
          </Col>
        </Row>
      ))}
    </Layout>
  )
}
