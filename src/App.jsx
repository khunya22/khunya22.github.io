import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css
import React from 'react';
import { styled } from '../stitches.config';
import Portfolio from './Portfolio";



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
    		<Portfolio />;
	)
  }

export default App
