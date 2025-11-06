import React from 'react'
import Link from 'next/link'
import { siteConfig } from '../config/site'

const Footer: React.FC = () => {
  return (
    <nav>
      <ul className="flex justify-end items-center border-t border-gray-300 dark:border-gray-700 px-2 py-3 m-0 list-none gap-4">
        {siteConfig.footerPages.map((page) => (
          <li key={page.path}>
            <Link href={page.path} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary no-underline">
              {page.title}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/feed.xml" aria-label="Atom Feed" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
            <i className="fas fa-rss" title="Atom Feed"></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
