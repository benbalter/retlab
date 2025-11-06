import { getPageWithHtml } from '../../lib/posts'
import Layout from '../../components/Layout'
import { notFound } from 'next/navigation'
import { siteConfig } from '../../config/site'

export const metadata = {
  title: `About - ${siteConfig.name}`,
}

export default async function AboutPage() {
  const page = await getPageWithHtml('about')

  if (!page) {
    notFound()
  }

  return (
    <Layout>
      <div className="grid grid-cols-1">
        <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
          <article className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-primary">{page.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: page.htmlContent }} />
          </article>
        </div>
      </div>
    </Layout>
  )
}
