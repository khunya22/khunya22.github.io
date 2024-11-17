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

const ContactLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const ContactLink = styled('a', {
  color: '$primary',
  textDecoration: 'none',
  fontSize: '1rem',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export default function Portfolio() {
  return (
    <Container>
      <Header>Welcome!</Header>

      <Section>
        <h2>Introduction</h2>
        <p>
          Hello! My name is Kevin and I am an aspiring web and security
          developer. Here lies a list of my projects ranging from
          programming-based to personal homelab work.
        </p>
      </Section>

      <Section>
        <h2>Projects</h2>
        <ProjectCard>
          <h3>Project 1</h3>
          <p>A brief description of the project.</p>
          <Button
            href="https://github.com/yourusername/project1"
            target="_blank"
          >
            View on GitHub
          </Button>
        </ProjectCard>

        <ProjectCard>
          <h3>Project 2</h3>
          <p>A brief description of the project.</p>
          <Button
            href="https://github.com/yourusername/project2"
            target="_blank"
          >
            View on GitHub
          </Button>
        </ProjectCard>
      </Section>

      <Section>
        <h2>Contact</h2>
        <p>Connect with me via the following platforms:</p>
        <ContactLinks>
          <ContactLink href="mailto:khunya22@proton.me" target="_blank">
            📧 Email
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/yourlinkedinusername"
            target="_blank"
          >
            🔗 LinkedIn
          </ContactLink>
          <ContactLink href="https://github.com/yourgithubusername" target="_blank">
            💻 GitHub
          </ContactLink>
          <ContactLink href="https://www.instagram.com/yourinstagramusername" target="_blank">
            📸 Instagram
          </ContactLink>
        </ContactLinks>
      </Section>
    </Container>
  );
}

