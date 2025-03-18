import React from 'react'
import { styled } from '../stitches.config'

// Overall page wrapper
const PageWrapper = styled('div', {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#0F0F0F',
  color: '#FFFFFF',
})

// Top Nav
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

// Main section for projects
const MainContent = styled('main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 5rem',
  boxSizing: 'border-box',
})

// Page title
const PageTitle = styled('h1', {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  fontWeight: '700',
  lineHeight: 1.2,
})

// Subtitle or paragraph
const Subtitle = styled('p', {
  fontSize: '1rem',
  marginBottom: '2rem',
  lineHeight: 1.6,
  maxWidth: '600px',
})

// Project grid container
const ProjectsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '2rem',
})

// Individual project card
const ProjectCard = styled('div', {
  backgroundColor: '#1A1A1A',
  borderRadius: '8px',
  padding: '1rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  // Optional: slight shadow or hover effect
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
  },
})

const ProjectImage = styled('img', {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '4px',
})

const ProjectTitle = styled('h3', {
  margin: 0,
  fontSize: '1.2rem',
  fontWeight: '600',
})

const ProjectDesc = styled('p', {
  fontSize: '0.95rem',
  lineHeight: 1.5,
})

function Projects() {
  return (
    <PageWrapper>
      {/* NAVIGATION */}
      <Header>
       
      </Header>

      {/* MAIN CONTENT */}
      <MainContent>
        <PageTitle>My Projects</PageTitle>
        <Subtitle>
          Here are some of the projects I’ve worked on, showcasing my experience
          in web design and development. Thanks for viewing!
        </Subtitle>

        <ProjectsGrid>
          {/* Example Project Card #1 */}
          <ProjectCard>
            <ProjectImage
              src="https://via.placeholder.com/600x400?text=Project+1"
              alt="Project 1"
            />
            <ProjectTitle>Project One</ProjectTitle>
            <ProjectDesc>
              A brief description of the project focusing on key tech or features.
            </ProjectDesc>
          </ProjectCard>

          {/* Example Project Card #2 */}
          <ProjectCard>
            <ProjectImage
              src="https://via.placeholder.com/600x400?text=Project+2"
              alt="Project 2"
            />
            <ProjectTitle>Project Two</ProjectTitle>
            <ProjectDesc>
              placeholder
            </ProjectDesc>
          </ProjectCard>

          {/* Add more cards as needed */}
        </ProjectsGrid>
      </MainContent>
    </PageWrapper>
  )
}

export default Projects
