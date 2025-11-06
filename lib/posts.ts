// Placeholder for post data fetching
// In a real implementation, this would read from markdown files or a CMS

export interface Post {
  slug: string
  title: string
  date: string
  url: string
  content: string
  archived?: boolean
}

export function getAllPosts(): Post[] {
  // This would normally read from _posts directory or an API
  return []
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug)
}
