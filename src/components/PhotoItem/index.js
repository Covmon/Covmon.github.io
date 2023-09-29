/*eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Container, Location, Caption } from './styles'

const PhotoItem = ({ image, caption, location, year, id }) => {
 return (
  

   <Container id={id}>
     <Location><p>📍 {location}</p><p>📅 {year}</p></Location>
     <LazyLoadImage
      height="300px"
      src={image} // use normal <img> attributes as props
      width="auto"
      maxWidth="500px"
      boxSizing="border-box"
    />
     <Caption>{caption}</Caption>
   </Container>
 )
}

export default PhotoItem