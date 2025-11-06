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
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <article>
            <h1 className="display-4 text-primary">{page.title}</h1>
            <div className="content" dangerouslySetInnerHTML={{ __html: page.htmlContent }} />
          </article>
        </div>
      </div>
    </Layout>
  )
}
