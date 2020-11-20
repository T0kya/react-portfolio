import { Asset, createClient, EntryCollection } from 'contentful'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const CaseContainer = styled.div`
    padding: 16px;
`

const CaseHeader = styled.div `
    width: 70%;
    margin: 50px auto;
`

const HeroImage = styled(motion.img) `
    max-width: 100%;
`

const Images = styled(motion.div) `
    display: flex;
    flex-basis: 49%;
    flex-wrap: wrap;
`
const ImageContainer = styled(motion.div) `
    max-width: 49%;
    margin: 6px 6px 0 0;

    img {
        width: 100%
    }
`
interface ReferenceProps {
    heroImage: Asset
    description: string
    title: string
    images: Asset[]
    slug: string
  }

const client = createClient({
  space: 'yjgyqsfydi6s',
  accessToken: '69Jy5bE9B_zy-2cZAotXYU7QjTHh5h-dChanho1IlPw'
})
const Case = () => {
  let { slug } = useParams<{slug: string}>()    

  const [data, setData] = useState<EntryCollection<ReferenceProps>| null>(null)

  useEffect(() => {
    client.getEntries<ReferenceProps>({ content_type: 'reference',
      'fields.slug[in]': slug})
      .then((entry) => setData(entry))
      .catch(console.error)
  }, [])

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,  transition: {delayChildren: 0.2, staggerChildren: 0.5, duration: 0.7} },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return <>
    {data?.items.map(item => (
      <CaseContainer key={item.fields.slug}>
        <CaseHeader>
          <h1>{item.fields.title}</h1>
          <p>
            {item.fields.description}
          </p>
        </CaseHeader>
        <HeroImage  initial="hidden" 
          animate="visible" 
          variants={variants}  src={item.fields.heroImage.fields.file.url} />
        <Images variants={variants} initial="hidden" ref={ref} animate={controls} >    
          {item.fields.images.map(item => 
            <ImageContainer key={item.fields.file.url}
              initial="hidden" 
              variants={variants} >
              <img src={item.fields.file.url} />
            </ImageContainer>)}
         
        </Images>
       
      </CaseContainer>
    )
    )}
    
  </>
}

export default Case