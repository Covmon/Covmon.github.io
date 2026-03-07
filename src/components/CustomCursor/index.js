import React, { useState, useEffect, useRef, useCallback } from 'react'
import { CursorDot, CursorRing } from './styles'

const CustomCursor = () => {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const ringRef = useRef(null)
  const ringPos = useRef({ x: -100, y: -100 })
  const targetPos = useRef({ x: -100, y: -100 })
  const rafId = useRef(null)

  const animateRing = useCallback(() => {
    const lerp = 0.15
    ringPos.current.x += (targetPos.current.x - ringPos.current.x) * lerp
    ringPos.current.y += (targetPos.current.y - ringPos.current.y) * lerp

    if (ringRef.current) {
      ringRef.current.style.left = `${ringPos.current.x}px`
      ringRef.current.style.top = `${ringPos.current.y}px`
    }

    rafId.current = requestAnimationFrame(animateRing)
  }, [])

  useEffect(() => {
    const checkTouch = window.matchMedia('(hover: none)').matches
    if (checkTouch) {
      setIsTouch(true)
      return
    }

    const move = (e) => {
      setDotPos({ x: e.clientX, y: e.clientY })
      targetPos.current = { x: e.clientX, y: e.clientY }
    }
    const over = (e) => {
      const clickable = e.target.closest('a, button, [role="button"], [onClick], .clickable, [data-clickable]')
      setIsHovering(!!clickable)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    rafId.current = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [animateRing])

  if (isTouch) return null

  return (
    <>
      <CursorDot style={{ left: dotPos.x, top: dotPos.y }} hovering={isHovering} />
      <CursorRing ref={ringRef} hovering={isHovering} />
    </>
  )
}

export default CustomCursor
