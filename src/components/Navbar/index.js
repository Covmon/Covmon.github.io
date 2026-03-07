import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle'
import { NavContainer, NavContent, NavLinks, NavLink, ProgressBar, Logo } from './styles'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

      setVisible(scrollY > 200)
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <NavContainer visible={visible}>
      <ProgressBar style={{ width: `${progress}%` }} />
      <NavContent>
        <Logo href={isHome ? '#' : '/'}>NC</Logo>
        <NavLinks>
          {isHome ? (
            <>
              <NavLink onClick={() => scrollTo('about')}>About</NavLink>
              <NavLink onClick={() => scrollTo('portfolio')}>Work</NavLink>
              <NavLink onClick={() => scrollTo('contact')}>Contact</NavLink>
              <NavLink as="a" href="/photos">Photos</NavLink>
            </>
          ) : (
            <NavLink as="a" href="/">Home</NavLink>
          )}
        </NavLinks>
        <ThemeToggle />
      </NavContent>
    </NavContainer>
  )
}

export default Navbar
