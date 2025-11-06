import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss'
import { faRetweet } from '@fortawesome/free-solid-svg-icons/faRetweet'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'
import { faBluesky } from '@fortawesome/free-brands-svg-icons/faBluesky'
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { closest } from 'fastest-levenshtein'

import { Collapse, Tooltip } from 'bootstrap'

import * as AnchorJS from 'anchor-js'
import * as Turbo from '@hotwired/turbo'

// Set up global objects for backwards compatibility
window.Turbo = Turbo
window.Collapse = Collapse
window.Tooltip = Tooltip

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

// Component for 404 suggestions
const FourOhFourSuggestion: React.FC = () => {
  const [suggestionUrl, setSuggestionUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
      if (xhr.status === 200) {
        const xml = xhr.responseXML
        if (xml != null) {
          const urls = Array.from(xml.querySelectorAll('urlset > url > loc')).map((el) => el.textContent as string)
          const url = new URL(closest(window.location.href, urls))
          setSuggestionUrl(url.href)
        } else {
          setSuggestionUrl('/')
        }
      } else {
        setSuggestionUrl('/')
      }
      setLoading(false)
    }

    xhr.onerror = () => {
      setSuggestionUrl('/')
      setLoading(false)
    }

    xhr.open('GET', `${window.location.protocol}//${window.location.host}/sitemap.xml`)
    xhr.send()
  }, [])

  if (loading) {
    return <span>Loading...</span>
  }

  if (suggestionUrl === null) {
    return <a href="/">/</a>
  }

  const url = new URL(suggestionUrl)
  return <a href={url.href}>{url.pathname}</a>
}

// Initialize anchors and tooltips on page load
const initializePage = (): void => {
  const anchors = new AnchorJS()
  anchors.add()

  const els = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  Array.from(els).forEach((el) => {
    new Tooltip(el) // eslint-disable-line no-new
  })

  // Mount React component for 404 suggestion if present
  const fourOhFourDiv = document.getElementById('four-oh-four-suggestion')
  if (fourOhFourDiv != null) {
    const root = createRoot(fourOhFourDiv)
    root.render(<FourOhFourSuggestion />)
  }
}

// Run on Turbo page load
document.addEventListener('turbo:load', initializePage)

// Run once on initial page load if Turbo hasn't loaded yet
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePage)
} else {
  initializePage()
}
