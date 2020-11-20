import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {reset } from 'styled-reset'
import Nav from './components/Nav'
import Home from './containers/Home/Home'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Montserrat', sans-serif;
    color: #212121
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
  a {
    color:#212121;
    text-decoration: none;
  }
`

const theme = {
  black: '#000000',
  dark: '#212121',
  pink: '#fd9f9f',
  white: '#ffffff',
  yellow: '#ffdb9c',
  grey: '#f3f6ff'
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
    
  )
}

export default App
