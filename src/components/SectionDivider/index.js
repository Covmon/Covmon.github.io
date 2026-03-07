import React from 'react'
import { DividerContainer } from './styles'

const SectionDivider = ({ fromColor, toColor, flip }) => (
  <DividerContainer flip={flip} fromColor={fromColor} toColor={toColor}>
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
      <path d="M0,0 L1200,60 L1200,0 Z" opacity=".15" />
      <path d="M0,20 L1200,60 L1200,0 L0,0 Z" />
    </svg>
  </DividerContainer>
)

export default SectionDivider
