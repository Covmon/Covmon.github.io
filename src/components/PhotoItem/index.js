/*eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

import { Container, Photo, Location, Caption } from './styles'

const PhotoItem = ({ image, caption, location, year, id }) => {
 return (
   <Container id={id}>
     <Location><p>📍 {location}</p><p>📅 {year}</p></Location>
     <Photo src={image} />
     <Caption>{caption}</Caption>
   </Container>
 )
}

export default PhotoItem