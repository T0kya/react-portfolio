import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


import logo from '../assets/logo.svg'

const NavContainer = styled.div `
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LinksContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 30%;
`

const NavLink = styled(Link) `
    font-family: 'Righteous', cursive;
`

const Nav = () => {
  return (<NavContainer>
    <LinksContainer>
      <NavLink to="/photography">
          Photography
      </NavLink>
      <NavLink to="/about">
          About
      </NavLink>
    </LinksContainer>
    <Link to="/"> <img src={logo} /></Link>
    <LinksContainer>
      <NavLink to="/contact">
         Contact
      </NavLink>
      <NavLink to="/coding">
          Instagram
      </NavLink>
      <NavLink to="/blog">
          Facebook
      </NavLink>
    </LinksContainer>
  </NavContainer>)
}

export default Nav