import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './colors'

export const ThemeToggleContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved ? saved === 'dark' : true
    } catch {
      return true
    }
  })

  const toggle = () => setIsDark(prev => !prev)
  const theme = isDark ? darkTheme : lightTheme

  useEffect(() => {
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
    document.body.style.backgroundColor = theme.bg
  }, [isDark, theme.bg])

  return (
    <ThemeToggleContext.Provider value={{ isDark, toggle }}>
      <SCThemeProvider theme={theme}>
        {children}
      </SCThemeProvider>
    </ThemeToggleContext.Provider>
  )
}
