import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

const AnimatedTitle = ({ line1, line2, highlightText }) => (
  <div>
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {line1.split('').map((char, i) => (
        <motion.span
          key={`l1-${i}`}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {line2.split('').map((char, i) => {
        const isHighlight = i >= line2.indexOf(highlightText) && i < line2.indexOf(highlightText) + highlightText.length
        return (
          <motion.span
            key={`l2-${i}`}
            variants={letterVariants}
            style={{ display: 'inline-block' }}
            className={isHighlight ? 'highlight' : ''}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </motion.h1>
  </div>
)

export default AnimatedTitle
