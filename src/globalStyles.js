// src/globalStyles.js
import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    minHeight: '100%',
  },
  body: {
    width: '100%',
    minHeight: '100%',
    margin: 0,
    padding: 0,
    fontFamily: '$sans',
    backgroundColor: '#0F0F0F', 
    color: '#FFFFFF',
  },
  '#root': {
    width: '100%',
    minHeight: '100%',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})
