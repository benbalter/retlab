import React from 'react'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  hero?: boolean
  postId?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Ben Balter',
  description = 'Attorney, open source developer, product manager',
  hero = false,
  postId = ''
}) => {
  const bodyClass = `mt-2${postId ? ` post-${postId}` : ''}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
        <link rel="icon" href="/favicon.ico" />
        {hero && <link rel="preload" href="/assets/img/header.jpg" as="image" />}
      </Head>
      <body className={bodyClass}>
        <div className="container">
          {hero && <div className="hero-unit rounded-top position-relative">&nbsp;</div>}
          
          <Nav hero={hero} />
          
          <div className="content" id="content" role="main">
            {children}
          </div>
          
          <Footer />
        </div>
      </body>
    </>
  )
}

export default Layout
