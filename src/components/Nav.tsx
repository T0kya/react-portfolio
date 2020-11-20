import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import logo from '../assets/logo.svg'

const NavContainer = styled.div `
    padding: 45px;
`

const Nav = () => {
  return (<NavContainer>
    <Link to="/"> <img src={logo} /></Link>
  </NavContainer>)
}

export default Nav