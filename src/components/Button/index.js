import React, { useState } from 'react'
import { ButtonContainer, Ripple } from './styles'

const Button = ({ text, onClick }) => {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - 10
    const y = e.clientY - rect.top - 10
    const id = Date.now()
    setRipples(prev => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id))
    }, 600)
    if (onClick) onClick(e)
  }

  return (
    <ButtonContainer onClick={handleClick}>
      {text}
      {ripples.map(r => (
        <Ripple key={r.id} style={{ left: r.x, top: r.y }} />
      ))}
    </ButtonContainer>
  )
}

export default Button
