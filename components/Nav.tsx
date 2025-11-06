import React from 'react'
import Link from 'next/link'
import { siteConfig } from '../config/site'
import NavbarToggle from './NavbarToggle'

interface NavProps {
  hero?: boolean
}

const Nav: React.FC<NavProps> = ({ hero = false }) => {
  const navClass = `navbar navbar-expand-md bg-secondary-subtle text-secondary border-start border-end border-bottom ${!hero ? 'border-top rounded-top' : ''} rounded-bottom mb-3`

  return (
    <>
      <nav className={navClass}>
        <div className="container-fluid px-3">
          <Link href="/" className="navbar-brand fw-bold">
            {siteConfig.name}
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbar" 
            aria-controls="navbar" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              {siteConfig.navPages.map((page) => (
                <li key={page.path} className="nav-item">
                  <Link href={page.path} className="nav-link">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span className="navbar-text text-end">
            {siteConfig.description}
          </span>
        </div>
      </nav>
      <NavbarToggle />
    </>
  )
}

export default Nav
