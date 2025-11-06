import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Post {
  slug: string
  title: string
  date: string
  url: string
  content: string
  archived?: boolean
  description?: string
  tldr?: string
}

export interface Page {
  slug: string
  title: string
  content: string
  permalink?: string
}

const postsDirectory = path.join(process.cwd(), '_posts')
const pagesDirectory = process.cwd()

// Parse markdown to HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

// Get all posts from _posts directory
export function getAllPosts(): Post[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.markdown'))
      .map(fileName => {
        // Extract date and slug from Jekyll filename format: YYYY-MM-DD-slug.md
        const match = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.(md|markdown)$/)
        if (!match) return null

        const [, dateStr, slug] = match
        const filePath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        const post: Post = {
          slug,
          title: data.title || slug,
          date: dateStr,
          url: `/${dateStr.replace(/-/g, '/')}/${slug}/`,
          content,
          archived: data.archived || false,
          description: data.description,
          tldr: data.tldr
        }

        return post
      })
      .filter((post): post is Post => post !== null)
      .sort((a, b) => (a.date > b.date ? -1 : 1)) // Sort by date, newest first

    return posts
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug)
}

// Get post with HTML content
export async function getPostWithHtml(slug: string): Promise<(Post & { htmlContent: string }) | undefined> {
  const post = getPostBySlug(slug)
  if (!post) return undefined

  const htmlContent = await markdownToHtml(post.content)
  return { ...post, htmlContent }
}

// Get all pages from root directory
export function getAllPages(): Page[] {
  try {
    const fileNames = fs.readdirSync(pagesDirectory)
    const pages = fileNames
      .filter(fileName => 
        (fileName.endsWith('.md') || fileName.endsWith('.markdown')) &&
        !fileName.startsWith('README') &&
        !fileName.startsWith('REACT_CONVERSION')
      )
      .map(fileName => {
        const slug = fileName.replace(/\.(md|markdown)$/, '')
        const filePath = path.join(pagesDirectory, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || slug,
          content,
          permalink: data.permalink
        }
      })

    return pages
  } catch (error) {
    console.error('Error reading pages:', error)
    return []
  }
}

// Get a single page by slug
export function getPageBySlug(slug: string): Page | undefined {
  const pages = getAllPages()
  return pages.find(page => page.slug === slug)
}

// Get page with HTML content
export async function getPageWithHtml(slug: string): Promise<(Page & { htmlContent: string }) | undefined> {
  const page = getPageBySlug(slug)
  if (!page) return undefined

  const htmlContent = await markdownToHtml(page.content)
  return { ...page, htmlContent }
}
