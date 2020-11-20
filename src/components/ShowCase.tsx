import React from 'react'
import styled from 'styled-components'
import ruosniemi from '../pictures/ruosniemi2.jpg'
import Button from './Button'

const CaseContainer = styled.div `
    padding: 0 16px;
    margin: 25px 0;
`

const ImageContainer = styled.div `
    display: block;
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center;
`

const CaseInfo = styled.div `
    margin: 70px auto;
    width: 50%;
    display: flex;
    align-items: flex-start;
`

const Tags = styled.div `
    display: flex;
    margin-bottom: 10px;
    span {
        margin-right: 32px;
    }
`

interface Props {
    hero: React.ReactNode
    title: string
    caption: string
    slug: string
}

const ShowCase: React.FC<Props> = ({hero, title, caption, slug}) => {
  return (
    <CaseContainer>
      <ImageContainer style={{backgroundImage: `url(${hero})`}} />
      <CaseInfo>
        <div>
          <Tags>
            <span>Photography</span>
            <span>Commercial</span>
          </Tags>
          <h1>{title}</h1>
          <p>
            {caption}
          </p>
        </div>
        <Button url={`/photography/${slug}`}>
          Show More
        </Button>
      </CaseInfo>
    </CaseContainer>
  )
}

export default ShowCase
