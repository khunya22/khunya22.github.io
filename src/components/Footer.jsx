// src/components/Footer.jsx
import React from 'react'
import { styled } from '../stitches.config'

// The main footer wrapper
const FooterContainer = styled('footer', {
  width: '100%',
  backgroundColor: '$rose',
  color: '$secondary',
  padding: '1rem',
  textAlign: 'center',
  fontFamily: '$sans',
})

// A content wrapper for alignment and maximum width
const FooterContent = styled('div', {
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

// A horizontal line styled with your theme
const FooterDivider = styled('hr', {
  width: '100%',
  border: 'none',
  borderTop: '1px solid $secondary',
  margin: '2rem 0',
})

// A section for your social links
const SocialLinks = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  marginBottom: '1rem',
})

const SocialLink = styled('a', {
  color: '$secondary',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: '$primary',
  },
})

// Smaller text for disclaimers, etc.
const SmallText = styled('p', {
  fontSize: '0.875rem',
  opacity: 0.8,
})

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Social Links */}
        <SocialLinks>
          <SocialLink href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</SocialLink>
          <SocialLink href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
          <SocialLink href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
        </SocialLinks>
        <p>Let’s connect on social media or via email!</p>
        <p style={{ marginTop: '0.5rem' }}>Email me at: <a href="mailto:khunya22@proton.me">khunya22@proton.me</a></p>
        <FooterDivider />
        <SmallText>© {new Date().getFullYear()} All rights reserved to Kevin Huynh; developer and owner</SmallText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
