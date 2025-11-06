'use client'

import { useEffect } from 'react'

export default function NavbarToggle() {
  useEffect(() => {
    // Simple toggle without Bootstrap
    const initializeNavbar = () => {
      if (typeof window !== 'undefined') {
        const toggleButton = document.querySelector('[data-bs-toggle="collapse"]')
        const collapseElement = document.querySelector('.navbar-collapse')
        
        if (toggleButton && collapseElement) {
          toggleButton.addEventListener('click', () => {
            collapseElement.classList.toggle('hidden')
            const isExpanded = !collapseElement.classList.contains('hidden')
            toggleButton.setAttribute('aria-expanded', isExpanded.toString())
          })
        }
      }
    }
    
    initializeNavbar()
  }, [])
  
  return null
}
