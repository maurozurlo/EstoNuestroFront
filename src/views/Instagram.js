import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../components/atoms/Card'
import ButtonPrimary from '../components/atoms/PrimaryButton'

import Spinner from '../components/atoms/Spinner'

// API
const { getInstagramData } = require('../components/handlers/api');

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

const SlotHolder = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 15px;
`

const Slot = styled.div`
width: 100%;
font-weight: 600;
text-align: center;
background-color: var(--slot-background);
border: 2px solid var(--slot-background);
display: flex;
justify-content: space-between;
padding: 10px 0;
color: var(--slot-text);
border-radius: 5px;
cursor: pointer;
box-sizing: border-box;
transition: .15s ease all;

:hover{
  filter: contrast(1.5);
  border: 2px solid var(--slot-text);
}
`

const Instagram = (props) => {
  const [dataFound, setDataFound] = useState(false);
  const [dataFetching, setDataFetching] = useState(true);
  const [data, setData] = useState({
    featured: {
      category: []
    },
    list: []
  })

  //Api Fetch
  useEffect(() => {
    setDataFetching(true);

    getInstagramData()
      .then(res => {
        setDataFetching(false);

        if (res) {
          setDataFound(true);
          setData(res);
        } else {
          setDataFound(false)
        }
      })
      .catch(error => {
        setDataFound(false)
      }
      )
  }, []);

  const Badges = (arr) => {
    arr.map((el, i) => { return <Badge key={i} colorIndex={i}>{el}</Badge> })
  }

  const t = ['a', 'b']



  return (
    <Wrapper>
      <Card content={<>
        <h2>Lista de Instagrams</h2>
        <p>En esta lista podés conocer proyectos y seguirlos para que te sigan también.</p>
        <ButtonContainer>
          <ButtonPrimary
            action={() => console.log('here')}
            primaryText='¡Me quiero sumar!'
          /></ButtonContainer>
      </>} />

      {dataFetching && !dataFound &&
        <Spinner />
      }

      {!dataFetching && dataFound &&
        <>
          <Card content={
            <>
              <Title>Podrías seguir a <a href={`https://instagram.com/${data.featured.username}`}>@{data.featured.username}</a></Title>
              <Container>
                <ArtistImage src={`data:image/jpeg;base64, ${data.featured.image}`} alt={data.featured.username} />
                <span>
                  <pre><strong>{data.featured.fullname}</strong> <br></br>{data.featured.description}

                  </pre>
                  <a href={data.featured.url}>{data.featured.url}</a>
                  <br></br>
                  {data.featured.category.map((el, i) => 
                  { return <Badge key={i} colorIndex={i}>{el}</Badge> })}

                </span>


              </Container>

            </>} />
          <div>
            {data.list.map(element => {
              return <SlotHolder key={element.username}>
                <Slot>
                  {element.username}
                  <span>
                  {element.category.map((el, i) => 
                  { return <Badge key={i} colorIndex={i}>{el}</Badge> })}
                  </span>
                </Slot>
              </SlotHolder>
            })}
          </div>
        </>
      }

      {!dataFetching && !dataFound &&
        <>Explotó todo a la mierda...</>
      }
    </Wrapper>
  )
}


export default Instagram