import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Overlay, ImageContainer, NavButton, Caption, CloseButton, Counter } from './styles'

const Lightbox = ({ photos, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !photos[currentIndex]) return null
  const photo = photos[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <Counter>{currentIndex + 1} / {photos.length}</Counter>
          <NavButton
            direction="left"
            onClick={(e) => { e.stopPropagation(); onPrev() }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </NavButton>
          <ImageContainer onClick={(e) => e.stopPropagation()}>
            <motion.img
              key={currentIndex}
              src={photo.image}
              alt={photo.caption}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Caption>
              {photo.location} &mdash; {photo.caption}
            </Caption>
          </ImageContainer>
          <NavButton
            direction="right"
            onClick={(e) => { e.stopPropagation(); onNext() }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </NavButton>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

export default Lightbox
