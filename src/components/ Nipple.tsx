import React from 'react'
import styled from 'styled-components'

const NippleOuter = styled.div `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.theme.yellow};
    display: flex;
    align-items: center;
    justify-content: center;
`

const NippleMiddle = styled.div `
     width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #feba9d;
    display: flex;
    align-items: center;
    justify-content: center;

`
const NippleCenter = styled.div `
     width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #FCA0A0;
    position: relative;
    z-index: 9999;
`

const Nipple = () => {

  return (
    <NippleOuter>
      <NippleMiddle>
        <NippleCenter></NippleCenter>
      </NippleMiddle>

    </NippleOuter>
  )
}

export default Nipple