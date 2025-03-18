// src/components/Header.jsx
import React from 'react'
import { styled } from '../stitches.config'
import { Link } from 'react-router-dom' 

const HeaderContainer = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  backgroundColor: '$primary',
  color: '$secondary',
})

const Logo = styled('div', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: '$sans',
})

const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
})

const NavLink = styled(Link, { 
  marginLeft: '1.5rem',
  textDecoration: 'none',
  color: '$secondary',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: '$rose',
  },
})

function Header() {
  return (
    <HeaderContainer>
      <Logo>MyLogo</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
