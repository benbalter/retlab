import React from 'react'
import Link from 'next/link'
import { siteConfig } from '../config/site'

const Footer: React.FC = () => {
  return (
    <nav>
      <ul className="nav justify-content-end border-top px-2 py-3">
        {siteConfig.footerPages.map((page) => (
          <li key={page.path} className="nav-item">
            <Link href={page.path} className="nav-link link-secondary">
              {page.title}
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <Link href="/feed.xml" aria-label="Atom Feed" className="nav-link">
            <i className="fas fa-rss" title="Atom Feed"></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Footer
