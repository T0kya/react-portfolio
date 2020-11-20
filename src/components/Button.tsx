import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    url: string
}

const ButtonStyle = styled(Link) `
    border: 2px solid ${props => props.theme.dark};
    padding: 14px;
    display: inline-block;
    font-family: 'Righteous', cursive;
`

const Button: React.FC<Props> = ({children, url}) => {
  return (
    <ButtonStyle to={url}>{children}</ButtonStyle>
  )
}

export default Button