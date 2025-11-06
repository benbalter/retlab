import { getAllPosts, getPostWithHtml } from '../../../../../lib/posts'
import PostLayout from '../../../../../components/PostLayout'
import { notFound } from 'next/navigation'

interface PostPageProps {
  params: Promise<{
    year: string
    month: string
    day: string
    slug: string
  }>
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  
  return posts.map(post => {
    const [year, month, day] = post.date.split('-')
    return {
      year,
      month,
      day,
      slug: post.slug
    }
  })
}

// Generate metadata for each post
export async function generateMetadata({ params }: PostPageProps) {
  const { year, month, day, slug } = await params
  const posts = getAllPosts()
  const post = posts.find(p => {
    const [y, m, d] = p.date.split('-')
    return y === year && m === month && d === day && p.slug === slug
  })

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.description || `${post.title} - Blog post`
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { year, month, day, slug } = await params
  const posts = getAllPosts()
  const post = posts.find(p => {
    const [y, m, d] = p.date.split('-')
    return y === year && m === month && d === day && p.slug === slug
  })

  if (!post) {
    notFound()
  }

  const postWithHtml = await getPostWithHtml(post.slug)
  if (!postWithHtml) {
    notFound()
  }

  const postPath = `_posts/${post.date}-${post.slug}.md`

  return (
    <PostLayout
      title={postWithHtml.title}
      date={postWithHtml.date}
      content={postWithHtml.htmlContent}
      archived={postWithHtml.archived}
      tldr={postWithHtml.tldr}
      path={postPath}
    />
  )
}
