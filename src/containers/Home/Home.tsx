import { Asset, createClient, EntryCollection } from 'contentful'
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import ShowCase from '../../components/ShowCase'

import ruosniemi from '../../pictures/ruosniemi2.jpg'

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
const Home = () => {

  const [data, setData] = useState<EntryCollection<ReferenceProps>| null>(null)

  useEffect(() => {
    client.getEntries<ReferenceProps>({content_type: 'reference'})
      .then((entry) => setData(entry))
      .catch(console.error)
  }, [])

  return (
    <>
      <Hero />
      {data?.items.map(item => {
        console.log(item)
        return (
          <ShowCase 
            key={item.fields.title} 
            hero={item.fields.heroImage.fields.file.url} 
            title={item.fields.title} 
            caption={item.fields.description} 
            slug={item.fields.slug}/>
        )
      })}
     
    </>
  )
}

export default Home