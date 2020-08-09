import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../components/atoms/Card'
import PrimaryLinkBtn from '../components/atoms/PrimaryLinkBtn'

import Spinner from '../components/atoms/Spinner'

// API
const { getInstagramData } = require('../components/handlers/api');

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  padding: 0 10px;
`


const Description = styled.div`
margin-left:8px;

strong{
  color: var(--text-dark);
}
pre,a{
  font-size: .8em;
  padding: 0;
}
strong, a{
  font-weight: 600;
}
`

const HighlightCard = styled.div`
display: flex;
align-items: center;
flex-direction: column;

div:nth-child(1){
  display: flex;
  align-items:center;
  @media (min-width: 650px) {
    justify-content: space-between;
  }
  @media (max-width: 360px) {
      flex-direction: column;
    }
}

img{
  width: 80px;
  border-radius: 50%;
}
`

const BadgeContainer = styled.div`
  display: flex;
    justify-content: flex-start;
    width: 100%;
`

const Title = styled.h3`
  font-weight: 400;
  text-align: left !important;
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

const ButtonContainer = styled.div`
margin-top: 6px;
button{
  display: block; 
  margin: 0 auto;
}
`

const SlotHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom:16px;

  h3{
    color: var(--text-dark);
    font-weight:600;
    margin: 0;
    margin-bottom: 8px;
  }
`

const Slot = styled.div`
width: 100%;
font-weight: 600;
text-align: center;
background-color: var(--button-outline-hover);
display: flex;
justify-content: space-between;
padding: 10px 1em;
border-radius: 3px;
box-sizing: border-box;
margin-bottom:3px;
`

const Button = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 24px;
  font-weight: 600;
  border-radius: var(--border-radius);
  font-size: 12px;
  min-width: 90px;
  padding: 10px 30px;
`

const ButtonOutline = styled(Button)`
  border: 1px solid var(--text-light);
  background-color: rgba(0,0,0,0);
  color: var(--input-background);
  :hover{
    cursor: pointer;
    border-color: var(--button-outline-hover);
    background-color: var(--button-outline-hover);
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

  return (
    <Wrapper>
      <Card content={<>
        <h2>Lista de Instagrams</h2>
        <p>En esta lista podés conocer proyectos y seguirlos para que te sigan a vos también.</p>
        <ButtonContainer>
          <PrimaryLinkBtn
            location="/instagram/register"
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
                <HighlightCard>
                <div>
                  <div>
                  <img src={`data:image/jpeg;base64, ${data.featured.image}`} alt={data.featured.username} />
                  </div>
                  <Description>
                    <strong>{data.featured.fullname}</strong>
                    <pre>{data.featured.description}</pre>
                    <a href={data.featured.url}>{data.featured.url}</a>
                  </Description>
                </div>
                <BadgeContainer>
                {//data.featured.category.map((el, i) => 
                 // { return <Badge key={i} colorIndex={i}>{el}</Badge> })
                }
                </BadgeContainer>
              </HighlightCard>
            </>} />

            <SlotHolder>
              <h3>{data.list.length + 1} anotadxs</h3>
            {data.list.map(element =>{
              return(
                <Slot key={element.username}>
                    
                    <a href={`https://instagram.com/${element.username}`}>@{element.username}</a>
                    <div>
                    {//element.category.map(cat => {
                     //   return(
                     //     <span key={cat}>{cat[0]}</span>
                     //   )
                    //})
                    }
                    </div>
                </Slot>
              )
            })}
          </SlotHolder>
          <ButtonOutline>Quiero salir de la lista</ButtonOutline>
        </>
      }

      {!dataFetching && !dataFound &&
        <>Explotó todo a la mierda...</>
      }
    </Wrapper>
  )
}


export default Instagram