import React from 'react'
import BG from '../assets/Hero.png'
import styled from 'styled-components'

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

const Hero = () => {

  return (
    <>
      <HeroImageContainer style={{backgroundImage: `url(${BG})`}}/>
      <TextContainer>
        <Info>
          Henkisesti pyörätiellä, fyysisesti Hyvinkäällä
        </Info>
        <h1>Photographer & front-end developer</h1>
        <p>Rohkea ja räväkkä kooderi Hyvinkäältä. Jukolan talo, eteläisessä Hämeessä, seisoo erään mäen pohjoisella rinteellä, liki Toukolan kylää. Sen läheisin ym­päristö on kivinen tanner, mutta alempana alkaa pellot, joissa, ennenkuin talo oli häviöön mennyt, aaltoili teräinen vilja. Peltojen alla on niittu, apilaäyräinen, halkileikkaama monipolvisen ojan; ja runsaasti antoi se heiniä, ennenkuin joutui laitumeksi kylän karjalle. Muutoin on talolla avaria metsiä, soita ja erämaita, jotka, tämän tilustan ensimmäisen perustajan oivallisen toiminnan kautta, olivat langenneet sille osaksi jo ison jaon käydessä entisinä aikoina. </p>

      </TextContainer>
    </>
  )
}

export default Hero