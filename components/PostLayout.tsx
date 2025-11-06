import React from 'react'
import Layout from './Layout'
import MiniBio from './MiniBio'
import ReadingTime from './ReadingTime'
import { siteConfig } from '../config/site'

interface PostLayoutProps {
  title: string
  date: string
  content: string
  archived?: boolean
  tldr?: string
  path?: string
}

const PostLayout: React.FC<PostLayoutProps> = ({
  title,
  date,
  content,
  archived = false,
  tldr,
  path = ''
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Layout>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <article className="post">
            <h1 className="display-4 text-primary">{title}</h1>

            {tldr && (
              <div className="alert alert-info" role="alert">
                <strong>TL;DR:</strong> {tldr}
              </div>
            )}

            {archived && (
              <div className="alert alert-warning" role="alert">
                <strong>❗ Heads up!</strong> This post is archived and here for historical purposes. 
                It may no longer be accurate or reflect my views. Proceed at your own risk.
              </div>
            )}

            <ReadingTime content={content} />

            <div className="entrybody" dangerouslySetInnerHTML={{ __html: content }} />

            <div className="mb-2 text-muted small">
              Originally published {formattedDate} |{' '}
              <a
                className="link-secondary"
                href={`${siteConfig.repository.url}/commits/${siteConfig.repository.branch}/${path}`}
                target="_blank"
                rel="noopener"
              >
                View revision history
              </a>
            </div>

            <div className="row border-top pt-3">
              <div className="col">
                <MiniBio />
              </div>
              <div className="col-lg-2 text-center pb-3">
                <p>
                  <small>This page is open source. Please help improve it.</small>
                </p>
                <a
                  className="btn btn-outline-primary btn-sm"
                  href={`${siteConfig.repository.url}/edit/${siteConfig.repository.branch}/${path}`}
                  title={`Help improve article ${path}`}
                >
                  Edit
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default PostLayout
