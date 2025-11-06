'use client'

import React from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'

const Footer: React.FC = () => {
  const footerPages = [
    { path: '/fine-print/', title: 'Fine Print' }
  ]

  return (
    <nav>
      <Nav className="justify-content-end border-top px-2 py-3">
        {footerPages.map((page) => (
          <Nav.Item key={page.path}>
            <Link href={page.path} passHref legacyBehavior>
              <Nav.Link className="link-secondary">
                {page.title}
              </Nav.Link>
            </Link>
          </Nav.Item>
        ))}
        <Nav.Item>
          <Link href="/feed.xml" passHref legacyBehavior>
            <Nav.Link aria-label="Atom Feed">
              <i className="fas fa-rss" title="Atom Feed"></i>
            </Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    </nav>
  )
}

export default Footer
