// src/stitches.config.js
import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, theme } = createStitches({
  theme: {
    colors: {
      primary: '#0F110C',
      secondary: '#FDECEF',
      tertiary: '#CECCCC',
      rose: '#9D6381',
      tyrianPurple: '#612940',
    },
    fonts: {
      sans: 'Crimson Text, sans-serif',
    },
  },
})
