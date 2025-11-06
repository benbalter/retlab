import React from 'react'
import { Alert, Button, Row, Col } from 'react-bootstrap'
import Layout from './Layout'
import MiniBio from './MiniBio'
import ReadingTime from './ReadingTime'

interface PostLayoutProps {
  title: string
  date: string
  content: string
  archived?: boolean
  tldr?: string
  repositoryUrl?: string
  branch?: string
  path?: string
}

const PostLayout: React.FC<PostLayoutProps> = ({
  title,
  date,
  content,
  archived = false,
  tldr,
  repositoryUrl = 'https://github.com/benbalter/retlab',
  branch = 'main',
  path = ''
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Layout>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <article className="post">
            <h1 className="display-4 text-primary">{title}</h1>

            {tldr && (
              <Alert variant="info">
                <strong>TL;DR:</strong> {tldr}
              </Alert>
            )}

            {archived && (
              <Alert variant="warning">
                <strong>❗ Heads up!</strong> This post is archived and here for historical purposes. 
                It may no longer be accurate or reflect my views. Proceed at your own risk.
              </Alert>
            )}

            <ReadingTime content={content} />

            <div className="entrybody" dangerouslySetInnerHTML={{ __html: content }} />

            <div className="mb-2 text-muted small">
              Originally published {formattedDate} |{' '}
              <a
                className="link-secondary"
                href={`${repositoryUrl}/commits/${branch}/${path}`}
                target="_blank"
                rel="noopener"
              >
                View revision history
              </a>
            </div>

            <Row className="border-top pt-3">
              <Col>
                <MiniBio />
              </Col>
              <Col lg={2} className="text-center pb-3">
                <p>
                  <small>This page is open source. Please help improve it.</small>
                </p>
                <Button
                  variant="outline-primary"
                  size="sm"
                  href={`${repositoryUrl}/edit/${branch}/${path}`}
                  title={`Help improve article ${path}`}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </article>
        </Col>
      </Row>
    </Layout>
  )
}

export default PostLayout
