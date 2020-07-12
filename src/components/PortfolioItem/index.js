import React from 'react'

import { Container, Title, Description } from './styles'

import { useHistory } from 'react-router-dom'

const PortfolioItem = ({ title, description,highlight, internal, link }) => {
  const history = useHistory()

  return (
    <Container highlight = {highlight}
      onClick = {() => {
        if (internal) {
          history.push(link)
        } else if (link)
          window.open(link)
        }
      }
    >
      <Title > {title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default PortfolioItem