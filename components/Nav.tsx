import React from 'react'
import Link from 'next/link'
import { siteConfig } from '../config/site'
import NavbarToggle from './NavbarToggle'

interface NavProps {
  hero?: boolean
}

const Nav: React.FC<NavProps> = ({ hero = false }) => {
  const navClass = `bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-x border-b ${!hero ? 'border-t rounded-t-lg' : ''} rounded-b-lg mb-3`

  return (
    <>
      <nav className={navClass}>
        <div className="container mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-gray-900 dark:text-white hover:text-primary">
              {siteConfig.name}
            </Link>
            <button 
              className="md:hidden px-3 py-2 border border-gray-400 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbar" 
              aria-controls="navbar" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="block w-5 h-0.5 bg-current mb-1"></span>
              <span className="block w-5 h-0.5 bg-current mb-1"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
            </button>
            <div className="hidden md:flex md:items-center md:gap-6">
              <ul className="flex gap-4 m-0 p-0 list-none">
                {siteConfig.navPages.map((page) => (
                  <li key={page.path}>
                    <Link href={page.path} className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary no-underline">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {siteConfig.description}
              </span>
            </div>
          </div>
          <div className="collapse navbar-collapse hidden" id="navbar">
            <ul className="md:hidden flex flex-col gap-2 mt-3 m-0 p-0 list-none">
              {siteConfig.navPages.map((page) => (
                <li key={page.path}>
                  <Link href={page.path} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary no-underline">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="md:hidden block mt-3 text-sm text-gray-600 dark:text-gray-400">
              {siteConfig.description}
            </span>
          </div>
        </div>
      </nav>
      <NavbarToggle />
    </>
  )
}

export default Nav
