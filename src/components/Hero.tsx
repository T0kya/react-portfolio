import React, { useEffect, useState } from 'react'
import BG from '../assets/Hero.png'
import styled from 'styled-components'
import { createClient, Entry, EntryCollection } from 'contentful'

const HeroImageContainer =  styled.div `
    height: 80vh;
    width: 100%;
    background-size: cover;
    background-position: center;
`

const TextContainer = styled.div `
    width: 60%;
    text-align: center;
    margin: 60px auto;
`

const Info = styled.p `
    font-size: 16px;
    font-weight: 300;
`

interface HeroProps {
  caption: string
  description: string
  title: string
}

const client = createClient({
  space: 'yjgyqsfydi6s',
  accessToken: '69Jy5bE9B_zy-2cZAotXYU7QjTHh5h-dChanho1IlPw'
})

const Hero = () => {

  const [data, setData] = useState<Entry<HeroProps>| null>(null)

  useEffect(() => {
    client.getEntry<HeroProps>('m4WvVSVDcIgT2oquchjHS')
      .then((entry) => setData(entry))
      .catch(console.error)
  }, [])

  return (
    <>
      <HeroImageContainer style={{backgroundImage: `url(${BG})`}}/>
      <TextContainer>
        <Info>
          {data?.fields.caption}
        </Info>
        <h1>{data?.fields.title}</h1>
        <p>{data?.fields.description}</p>
      </TextContainer>
    </>
  )
}

export default Hero