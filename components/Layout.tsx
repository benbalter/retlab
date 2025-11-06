import React from 'react'
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
    <div className="container">
      {hero && <div className="hero-unit rounded-top position-relative">&nbsp;</div>}
      
      <Nav hero={hero} />
      
      <div className="content" id="content" role="main">
        {children}
      </div>
      
      <Footer />
    </div>
  )
}

export default Layout
