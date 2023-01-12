import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
    color: ${props => (props.isDarkMode ? 'white' : 'black')};
  }
`;

const Button = styled.button`
  background-color: ${props => (props.isDarkMode ? 'white' : 'black')};
  color: ${props => (props.isDarkMode ? 'black' : 'white')};
`;

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Button isDarkMode={isDarkMode} onClick={handleClick}>
        {isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
      </Button>
    </>
  );
}

export default DarkModeToggle;