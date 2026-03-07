/*eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Container, Location, Caption } from './styles'

const PhotoItem = ({ image, caption, location, year, id, onClick }) => {
  return (
    <Container id={id} onClick={onClick}>
      <Location><p>📍 {location}</p><p>📅 {year}</p></Location>
      <LazyLoadImage
        height="300px"
        src={image}
        width="auto"
        maxWidth="500px"
        boxSizing="border-box"
      />
      <Caption>{caption}</Caption>
    </Container>
  )
}

export default PhotoItem
