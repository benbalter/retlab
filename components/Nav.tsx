'use client'

import React from 'react'
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap'
import Link from 'next/link'

interface NavProps {
  hero?: boolean
}

const Nav: React.FC<NavProps> = ({ hero = false }) => {
  const navPages = [
    { path: '/', title: 'Posts' },
    { path: '/about/', title: 'About' }
  ]

  const navClass = `bg-secondary-subtle text-secondary border-start border-end border-bottom ${!hero ? 'border-top rounded-top' : ''} rounded-bottom mb-3`

  return (
    <Navbar expand="md" className={navClass}>
      <Container fluid className="px-3">
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand className="fw-bold">
            Ben Balter
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <BootstrapNav className="mr-auto">
            {navPages.map((page) => (
              <Link key={page.path} href={page.path} passHref legacyBehavior>
                <BootstrapNav.Link>
                  {page.title}
                </BootstrapNav.Link>
              </Link>
            ))}
          </BootstrapNav>
        </Navbar.Collapse>
        <Navbar.Text className="text-end">
          Attorney, open source developer, product manager
        </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default Nav
