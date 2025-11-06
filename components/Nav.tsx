'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface NavProps {
  hero?: boolean
}

const Nav: React.FC<NavProps> = ({ hero = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const navPages = [
    { path: '/', title: 'Posts' },
    { path: '/about/', title: 'About' }
  ]

  const navClass = `navbar navbar-expand-md bg-secondary-subtle text-secondary border-start border-end border-bottom ${!hero ? 'border-top rounded-top' : ''} rounded-bottom mb-3`

  return (
    <div className={navClass}>
      <div className="container-fluid px-3">
        <Link href="/" className="navbar-brand fw-bold">
          Ben Balter
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbar" role="navigation">
          <ul className="navbar-nav mr-auto">
            {navPages.map((page) => (
              <li key={page.path} className="nav-item">
                <Link href={page.path} className="nav-link">
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <span className="navbar-text text-end">
          Attorney, open source developer, product manager
        </span>
      </div>
    </div>
  )
}

export default Nav
