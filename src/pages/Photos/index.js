/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { 
 PageContainer, TitleContainer, SubtitleContainer,
 PhotosContainer,
} from './styles'
import PhotoItem from '../../components/PhotoItem'

import photos from './photos'

const Photos = () => {
  useEffect(() => {
   window.scrollTo(0,0)
  }, [])

  return (
    <PageContainer>
      <TitleContainer>
        <h1>{"TRAVEL & PHOTOS 📷"}</h1>
      </TitleContainer>
      <SubtitleContainer>
        <h3>
        ⬅️ <Link to="/">back home</Link>&#8226;
        <a href="#wyoming">wyoming</a>&#8226;
        <a href="#france">paris</a>&#8226;
        <a href="#switzerland">switzerland</a>&#8226;
        <a href="#israel">israel</a>&#8226;
        <a href="#utah">utah</a>&#8226;
        <a href="#peru">peru</a>&#8226;
        <a href="#alaska">alaska</a>
        </h3>
      </SubtitleContainer>
      <PhotosContainer>
        {
          photos.map(photo => (
            <PhotoItem 
              key={photo.caption}
              image={photo.image}
              location={photo.location}
              caption={photo.caption}
              year={photo.year}
              id={photo.id}
            />
          ))
        }
      </PhotosContainer>
    </PageContainer>
  )
}

export default Photos