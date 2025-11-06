'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Dynamic imports for client-side only
    const initializeScripts = async () => {
      const { config, library, dom } = await import('@fortawesome/fontawesome-svg-core')
      const { faRss } = await import('@fortawesome/free-solid-svg-icons/faRss')
      const { faRetweet } = await import('@fortawesome/free-solid-svg-icons/faRetweet')
      const { faTwitter } = await import('@fortawesome/free-brands-svg-icons/faTwitter')
      const { faLinkedin } = await import('@fortawesome/free-brands-svg-icons/faLinkedin')
      const { faGithub } = await import('@fortawesome/free-brands-svg-icons/faGithub')
      const { faEnvelope } = await import('@fortawesome/free-solid-svg-icons/faEnvelope')
      const { faAddressCard } = await import('@fortawesome/free-solid-svg-icons/faAddressCard')
      const { faBluesky } = await import('@fortawesome/free-brands-svg-icons/faBluesky')
      const { faClock } = await import('@fortawesome/free-regular-svg-icons/faClock')
      const { faHeart } = await import('@fortawesome/free-regular-svg-icons/faHeart')
      const { Tooltip } = await import('bootstrap')
      const AnchorJS = (await import('anchor-js')).default

      // Configure FontAwesome
      config.mutateApproach = 'sync'
      library.add(
        faRss,
        faTwitter,
        faLinkedin,
        faGithub,
        faEnvelope,
        faAddressCard,
        faRetweet,
        faHeart,
        faClock,
        faBluesky
      )
      dom.watch()

      // Initialize AnchorJS
      const anchors = new AnchorJS()
      anchors.add()

      // Initialize Bootstrap tooltips
      const els = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      Array.from(els).forEach((el) => {
        new Tooltip(el)
      })

      // Handle 404 suggestions
      const div = document.getElementById('four-oh-four-suggestion')
      if (div != null) {
        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
          if (xhr.status === 200) {
            const xml = xhr.responseXML
            if (xml) {
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              const { closest } = require('fastest-levenshtein')
              const urls = Array.from(xml.querySelectorAll('urlset > url > loc')).map(
                (el) => el.textContent
              )
              const url = new URL(closest(window.location.href, urls))
              div.innerHTML = `<a href="${url.href}">${url.pathname}</a>`
            }
          } else {
            div.innerHTML = '<a href="/">/</a>'
          }
        }

        xhr.open('GET', `${window.location.protocol}//${window.location.host}/sitemap.xml`)
        xhr.send()
      }
    }

    initializeScripts()
  }, [])

  return null
}
