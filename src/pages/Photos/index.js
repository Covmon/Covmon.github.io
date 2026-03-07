/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useCallback } from 'react'

import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Lightbox from '../../components/Lightbox'

import {
  PageContainer, TitleContainer, SubtitleContainer,
  PhotosContainer,
} from './styles'
import PhotoItem from '../../components/PhotoItem'

import photos from './photos'

const Photos = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const onNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % photos.length)
  }, [])

  const onPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + photos.length) % photos.length)
  }, [])

  const onClose = useCallback(() => {
    setLightboxOpen(false)
  }, [])

  return (
    <PageContainer>
      <Navbar />
      <TitleContainer>
        <h1>{"TRAVEL & PHOTOS"}</h1>
      </TitleContainer>
      <SubtitleContainer>
        <div>
          <div><Link to="/">back home</Link></div>
          <div><span>&#8226;</span><a href="#italy">italy</a></div>
          <div><span>&#8226;</span><a href="#brazil">brazil</a></div>
          <div><span>&#8226;</span><a href="#hawaii">hawaii</a></div>
          <div><span>&#8226;</span><a href="#wyoming">wyoming</a></div>
          <div><span>&#8226;</span><a href="#france">paris</a></div>
          <div><span>&#8226;</span><a href="#switzerland">switzerland</a></div>
          <div><span>&#8226;</span><a href="#israel">israel</a></div>
          <div><span>&#8226;</span><a href="#utah">utah</a></div>
          <div><span>&#8226;</span><a href="#peru">peru</a></div>
          <div><span>&#8226;</span><a href="#alaska">alaska</a></div>
        </div>
      </SubtitleContainer>
      <PhotosContainer>
        {
          photos.map((photo, index) => (
            <PhotoItem
              key={photo.caption}
              image={photo.image}
              location={photo.location}
              caption={photo.caption}
              year={photo.year}
              id={photo.id}
              onClick={() => openLightbox(index)}
            />
          ))
        }
      </PhotosContainer>
      <Lightbox
        photos={photos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />
    </PageContainer>
  )
}

export default Photos
