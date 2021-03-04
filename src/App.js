import React from 'react'
import './css/reset.css'
import styled from 'styled-components'
import { ThemeStore } from './themeStyles/ThemeContainer'
import Theme from './Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components

import Landing from './components/Landing'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Basic from './components/quiz/basic/Basic'
import Intermediate from './components/quiz/intermediate/Intermediate'
import StartQuiz from './components/StartQuiz'
import QuizComponent from './components/quiz/QuizComponent'
import Donation from './components/Donation'

function App() {
  window.addEventListener("resize", function() {
    console.log(window.innerWidth);
});

  return (
    <ThemeStore> {/* Theme Provider */}
      <Theme> {/* Theme style object */}
        <Container> {/* Wrapping contents */}
          <Router>
          <NavBar /> {/* Nav bar, always on top */}
          
          <MainContents> {/* Contents will be loaded here */}
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/start-quiz' component={StartQuiz} />
              <Route path='/basic-prepositions' component={Basic} />
              <Route path='/intermediate-prepositions' component={Intermediate} />
              <Route path='/basic-quiz' component={QuizComponent} />
              <Route path='/intermediate-quiz' component={QuizComponent} />
              <Route path='/donation' component={Donation} />
            </Switch>
          </MainContents>
          </Router>
          <Footer /> {/* Also always loaded, and has Link(so inside of Router) */} 
        </Container>
      </Theme>
    </ThemeStore>
  );
}

const Container = styled.section`
  width: 100%;
  /* height: 100%; */
  min-height: calc(100vh - 210px);
  background-color: ${props => props.theme.background};
`

const MainContents = styled.div`
  min-height: calc(100vh - 210px);
`

export default App;
