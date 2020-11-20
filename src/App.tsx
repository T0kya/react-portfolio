import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import { createGlobalStyle } from 'styled-components'
import {reset } from 'styled-reset'
import Nav from './components/Nav'
import Home from './containers/Home/Home'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Montserrat', sans-serif;
  }

  p {
    margin: 10px 0;
    line-height: 24px;
  }

  h1 {
    font-family: 'Righteous', cursive;
    font-size: 40px;
    margin-bottom: 25px;
  }
`

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  )
}

export default App
