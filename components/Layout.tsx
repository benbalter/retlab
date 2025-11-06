import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  hero?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  hero = false
}) => {
  return (
    <Container>
      {hero && <div className="hero-unit rounded-top position-relative">&nbsp;</div>}
      
      <Nav hero={hero} />
      
      <div className="content" id="content" role="main">
        {children}
      </div>
      
      <Footer />
    </Container>
  )
}

export default Layout
