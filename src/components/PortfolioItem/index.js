import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'

import { Container, Title, Description, TagsContainer, Tag } from './styles'

import { useHistory } from 'react-router-dom'

const PortfolioItem = ({ title, description, highlight, internal, link, smallTitle, tags }) => {
  const history = useHistory()
  const tiltRef = useRef(null)

  useEffect(() => {
    const node = tiltRef.current
    if (node) {
      VanillaTilt.init(node, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        scale: 1.02,
      })
    }
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy()
      }
    }
  }, [])

  return (
    <Container
      ref={tiltRef}
      highlight={highlight}
      data-clickable="true"
      onClick={() => {
        if (internal) {
          history.push(link)
        } else if (link) {
          window.open(link)
        }
      }}
    >
      <Title small={smallTitle}>{title}</Title>
      <Description>{description}</Description>
      {tags && tags.length > 0 && (
        <TagsContainer>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}
    </Container>
  )
}

export default PortfolioItem
