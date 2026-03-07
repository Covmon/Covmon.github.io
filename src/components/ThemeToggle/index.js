import React, { useContext } from 'react'
import { ThemeToggleContext } from '../../theme/ThemeContext'
import { ToggleButton } from './styles'

const ThemeToggle = () => {
  const { isDark, toggle } = useContext(ThemeToggleContext)

  return (
    <ToggleButton onClick={toggle} aria-label="Toggle theme">
      {isDark ? '☀️' : '🌙'}
    </ToggleButton>
  )
}

export default ThemeToggle
