import React from 'react'
import { styled, keyframes } from '../stitches.config'


const PageWrapper = styled('div', {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$primary', 
  color: '#FFFFFF',
  '@media (max-width: 768px)': {
    padding: '1rem',
  },
})


const HeroSection = styled('section', {
  position: 'relative',
  width: '100%',
  minHeight: '100vh', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
  padding: '2rem 5rem', 
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '1rem',
  },
})


const BackgroundShape = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: '60vw',     
  height: '100%',     
  backgroundColor: '#612940', 
  transform: 'skew(-20deg)',
  transformOrigin: 'top right',
  zIndex: 0,
  '@media (max-width: 768px)': {
    width: '100vw',
    height: '50%',
    transform: 'skew(0deg)',
  },
})


const HeroContent = styled('div', {
  zIndex: 1,   
  maxWidth: '600px',
  textAlign: 'left',
})



const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const MainHeading = styled('h1', {
  fontSize: '3rem',
  fontWeight: '700',
  marginBottom: '1rem',
  lineHeight: 1.2,
  animation: `${fadeIn} 1s ease forwards`,
})

const SubHeading = styled('h2', {
  fontSize: '1.5rem',
  fontWeight: '400',
  marginBottom: '2rem',
  lineHeight: 1.4,
  animation: `${fadeIn} 1.5s ease forwards`,
})

const CTAButton = styled('button', {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  fontWeight: '600',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#FFFFFF',
  color: '#0F0F0F',
  transition: '0.3s',

  '&:hover': {
    boxShadow: '0 0 12px rgba(255, 255, 255, 0.6)',
    transform: 'translateY(-2px)',
  },
})


const float = keyframes({
  '0%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-10px)' },
  '100%': { transform: 'translateY(0)' },
})

const HeroImage = styled('img', {
  zIndex: 1,
  width: '350px',
  height: 'auto',
  objectFit: 'contain',
  animation: `${float} 3s ease-in-out infinite`,
})

function Home() {
  return (
    <PageWrapper>
      <HeroSection>
        {}
        <BackgroundShape />

        <HeroContent>
          <h2>Hi, I’m Kevin,</h2>
          <MainHeading>Welcome to My Portfolio</MainHeading>
          <SubHeading>Discover my projects and skills</SubHeading>
          <CTAButton>Get in Touch</CTAButton>
        </HeroContent>

        <HeroImage
          src="https://via.placeholder.com/350?text=3D+Avatar"
          alt="Picture placeholder"
        />
      </HeroSection>
    </PageWrapper>
  )
}

export default Home
