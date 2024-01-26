
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { greenTheme } from './utils/Theme';
import NavBar from './components/NavBar';
import HeroSec from './components/HeroSec';
import Skills from './components/Skills';
import Edu from './components/Edu';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter as Router } from "react-router-dom";
//awdiadjw

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg };
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    38.73deg,
    rgba(21,210,112, 0.15) 0%, 
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



function App() {
  return (
    <ThemeProvider theme={greenTheme}>
      <Router>
      <NavBar />
      <Body>
        <HeroSec />
        <Wrapper>
          <Skills />
          <Edu />
          </Wrapper>
          <Contact />
          <Footer />
 
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
