'use client'

import { useEffect } from 'react'

export default function NavbarToggle() {
  useEffect(() => {
    // Initialize Bootstrap collapse for navbar
    const initializeNavbar = async () => {
      if (typeof window !== 'undefined') {
        const { Collapse } = await import('bootstrap')
        
        const toggleButton = document.querySelector('[data-bs-toggle="collapse"]')
        const collapseElement = document.querySelector('.navbar-collapse')
        
        if (toggleButton && collapseElement) {
          // Initialize collapse
          const collapse = new Collapse(collapseElement, { toggle: false })
          
          toggleButton.addEventListener('click', () => {
            collapse.toggle()
          })
        }
      }
    }
    
    initializeNavbar()
  }, [])
  
  return null
}
