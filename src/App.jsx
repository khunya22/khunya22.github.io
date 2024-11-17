import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import { styled } from '../stitches.config';

const Container = styled('div', {
  backgroundColor: '$primary',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
});


function App() {
  const [count, setCount] = useState(0)
	return (
    		<Container>
      			<h1>Welcome to My Stitches Site!</h1>
    		</Container>
  		);
  }

export default App
