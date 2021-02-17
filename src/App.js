import React from 'react'
import './reset.css'
import styled from 'styled-components';
import { ThemeProvider } from './themeStyles/ThemeContext'

// components
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {
  return (
    <ThemeProvider>
        <Container>
          <Header>
            <NavBar />
          </Header>
        </Container>
    </ThemeProvider>
  );
}

const Container = styled.section`
  width: 700px;
  height: 700px;

  @media (max-width: 700px) {
    background-color: yellow;
  }
`

export default App;
