import React from 'react'
import { styled } from '../stitches.config'

const PageWrapper = styled('div', {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#0F0F0F',
  color: '#FFFFFF',
})

const Header = styled('header', {
  width: '100%',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  boxSizing: 'border-box',
})

const Brand = styled('div', {
  fontSize: '1.25rem',
  fontWeight: 'bold',
})

const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
})

const NavLink = styled('a', {
  textDecoration: 'none',
  color: '#FFFFFF',
  fontWeight: '500',
  fontSize: '1rem',
  '&:hover': {
    opacity: 0.8,
  },
})

const IconRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

const MainContent = styled('main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 5rem',
  boxSizing: 'border-box',
})

const PageTitle = styled('h1', {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  fontWeight: '700',
  lineHeight: 1.2,
})

const Subtitle = styled('p', {
  fontSize: '1rem',
  marginBottom: '2rem',
  lineHeight: 1.6,
  maxWidth: '600px',
})

const ContactForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '500px',
})

const InputField = styled('input', {
  padding: '0.75rem',
  border: '1px solid #444',
  borderRadius: '4px',
  backgroundColor: '#1A1A1A',
  color: '#FFFFFF',
  fontSize: '1rem',
})

const TextAreaField = styled('textarea', {
  padding: '0.75rem',
  border: '1px solid #444',
  borderRadius: '4px',
  backgroundColor: '#1A1A1A',
  color: '#FFFFFF',
  fontSize: '1rem',
  minHeight: '120px',
})

const SubmitButton = styled('button', {
  padding: '0.75rem 1.5rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#FFFFFF',
  color: '#0F0F0F',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',

  '&:hover': {
    opacity: 0.8,
  },
})

function Contact() {
  return (
    <PageWrapper>
      {}
      <Header>
        
      </Header>

      {}
      <MainContent>
        <PageTitle>Get in Touch</PageTitle>
        <Subtitle>
          Interested in collaborating or have a question? 
          Send a message below and I’ll get back to you as soon as possible.
        </Subtitle>

        <ContactForm>
          <InputField type="text" name="name" placeholder="Your Name" required />
          <InputField type="email" name="email" placeholder="Your Email" required />
          <TextAreaField name="message" placeholder="Your Message..." required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </MainContent>
    </PageWrapper>
  )
}

export default Contact
