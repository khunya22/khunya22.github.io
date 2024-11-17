import React from 'react';
import { styled } from '../stitches.config';

const Container = styled('div', {
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
});

const Header = styled('h1', {
  fontSize: '2.5rem',
  color: '$primary',
});

const Section = styled('div', {
  marginBottom: '2rem',
});

const ProjectCard = styled('div', {
  border: '1px solid $secondary',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
});

const Button = styled('a', {
  display: 'inline-block',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: '$primary',
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '$secondary',
  },
});

export default function Portfolio() {
  return (
    <Container>
      <Header>My Portfolio</Header>

      <Section>
        <h2>Introduction</h2>
        <p>Hello! I'm a developer with experience in front-end and back-end development. Below are some of the projects I've worked on.</p>
      </Section>

      <Section>
        <h2>Projects</h2>
        <ProjectCard>
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
          <Button href="https://github.com/yourusername/project1" target="_blank">
            View on GitHub
          </Button>
        </ProjectCard>

        <ProjectCard>
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
          <Button href="https://github.com/yourusername/project2" target="_blank">
            View on GitHub
          </Button>
        </ProjectCard>
      </Section>

      <Section>
        <h2>Contact</h2>
        <p>You can reach me at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
      </Section>
    </Container>
  );
}

