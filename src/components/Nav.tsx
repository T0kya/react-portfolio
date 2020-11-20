import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


import logo from '../assets/logo.svg'
import Nipple from './ Nipple'
import { motion } from 'framer-motion'

const NavContainer = styled.div `
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LinksContainer = styled.div `
    display: flex;
    width: 30%;
`

const NavLink = styled(Link) `
    font-family: 'Righteous', cursive;
    margin-right: 10%;
    position: relative;
    padding: 16px 0;

    &:before {
        position: absolute;
        bottom: 8px;
        left: 0;
        content: '';
        width: 0;
        height: 5px;
        background: ${props => props.theme.pink};
        transition: all 0.2s ease-in;
    }

    &:hover {
        &:before {
            width: 100%;
        }
    }
`

const NippleLogoContainer = styled.div `
    position:relative;
`

const PositionedNipple = styled(motion.div) `
        position: absolute;
    right: 55px;
    bottom: 3px;
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
    <Link to="/"> <NippleLogoContainer>
      <img src={logo} />
      <PositionedNipple 
        animate={{
          scale: [0, 2,1]
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5],
          repeatDelay: 1,
          loop: 'infinite'
        }}
      >
        <Nipple />
      </PositionedNipple>
    </NippleLogoContainer></Link>
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