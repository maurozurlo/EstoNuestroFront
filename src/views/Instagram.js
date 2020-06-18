import React from 'react'
import styled from 'styled-components'
import Card from '../components/atoms/Card'
import ButtonPrimary from '../components/atoms/PrimaryButton'
import Image from '../assets/img.jpg'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  padding: 0 10px;
`

const ArtistImage = styled.img`
  width: 100px;
  margin-right: 20px;
  border-radius: 50%;
`

const InstagramDescription = styled.span`
  color: var(--text-dark);
`

const Title = styled.h3`
  text-align: left !important;
  margin: 10px 0 !important;
`

const Badge = styled.div`
  background-color: var(--badge-${props => props.colorIndex});
  border-radius: var(--border-radius);
  font-size: .8em;
  display: inline-block;
  padding: 1px 12px;
  margin-top: 10px;
  margin-right: 10px;

  
`


const Container = styled.div`
display: flex;
align-items: center;
`

const ButtonContainer = styled.div`
button{
  display: block; 
  margin: 0 auto;
}
`

const Instagram = (props) => {
  const featuredArtist = {
    username: 'elmairuo',
    desc: ['haciendo en<br><a class="notranslate" href="/estonuestro/">@estonuestro</a><br><a class="notranslate" href="/sigacalixto/">@sigacalixto</a> <br>manzanas verdes:'],
    picture: Image,
    category: ['Música', 'Arte', 'Poesía', 'Otro']
  }

  const Description = () => {
    return (
      <InstagramDescription dangerouslySetInnerHTML={{ __html: featuredArtist.desc }}></InstagramDescription>
    )
  }

  const Badges = featuredArtist.category.map((el, i) =>
    <Badge key={i} colorIndex={i}>{el}</Badge>);

  return (
    <Wrapper>
      <Card content={<>
        <h2>Lista de Instagrams</h2>
        <p>Desde <a href="https://instagram.com/estonuestro">@EstoNuestro</a> queremos ayudar a lxs artistas a incrementar su audiencia.<br />
          En esta lista podés conocer proyectos y seguirlos para que te sigan también.</p>
          <ButtonContainer>
          <ButtonPrimary
        action={() => console.log('here')}
        primaryText='¡Me quiero sumar!'
      /></ButtonContainer>
          </>} />
      {/* Random Featured*/}
      <Card content={
        <>

          <Title>Podrías seguir a <a href={`https://instagram.com/${featuredArtist.username}`}>@{featuredArtist.username}</a></Title>
          <Container>
            <iframe 
            title="Instagram"
            is="x-frame-bypass"
            src="https://instagram.com/p/zoelisgris/embed" />
            <ArtistImage src={featuredArtist.picture} alt={featuredArtist.username} />
            <Description />
          </Container>
          {Badges}
        </>
      } />
    </Wrapper>
  )
}


export default Instagram