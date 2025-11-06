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
      <div className="grid grid-cols-1 gap-4">
        <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <article className="post prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>

            {tldr && (
              <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-4" role="alert">
                <strong>TL;DR:</strong> {tldr}
              </div>
            )}

            {archived && (
              <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-4" role="alert">
                <strong>❗ Heads up!</strong> This post is archived and here for historical purposes. 
                It may no longer be accurate or reflect my views. Proceed at your own risk.
              </div>
            )}

            <ReadingTime content={content} />

            <div className="entrybody" dangerouslySetInnerHTML={{ __html: content }} />

            <div className="mb-2 text-gray-600 dark:text-gray-400 text-sm">
              Originally published {formattedDate} |{' '}
              <a
                className="text-gray-600 dark:text-gray-400 hover:text-primary"
                href={`${siteConfig.repository.url}/commits/${siteConfig.repository.branch}/${path}`}
                target="_blank"
                rel="noopener"
              >
                View revision history
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 border-t border-gray-300 dark:border-gray-700 pt-3">
              <div className="lg:col-span-10">
                <MiniBio />
              </div>
              <div className="lg:col-span-2 text-center pb-3">
                <p className="text-sm mb-2">
                  This page is open source. Please help improve it.
                </p>
                <a
                  className="inline-block px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded transition-colors text-sm"
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
