import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../components/atoms/Card'
import PrimaryLinkBtn from '../components/atoms/PrimaryLinkBtn'
import {truncateString} from '../helpers/global'
import Spinner from '../components/atoms/Spinner'
import InstaQuit from '../components/modal/Insta-Quit'
import missingImage from '../assets/no-image.svg'
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
a{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`

const HighlightCard = styled.div`
margin-top: 8px;
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
  display: grid;
  justify-content: center;
  align-content: center;
  column-gap: 4px;
  grid-auto-flow: column;
  margin-top: 8px;
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
  max-width: 100px;
`

const ButtonContainer = styled.div`
margin-top: 8px;
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
align-items: center;
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

  const returnCategoryData = (val) =>{
    console.log(val)
    if(val.length > 0){
      const values = val.split(',')

      const _categories = [['🎵','Música'], ['🖌️','Arte'], ['📄','Poesía'], ['👽','Otro']]
      const categories = []
      values.forEach(element => categories.push(_categories[parseInt(element, 10)]))
      return categories
    }
    return [[0,0]]
  }

  const [displayModal, setDisplayModal] = useState(false)

  const changeModalState = () =>{
    setDisplayModal(!displayModal)
  }


  return (
    <>
    {displayModal && <InstaQuit changeModalState={changeModalState} />}
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
                  <img src={
                    data.featured.image ?`data:image/jpeg;base64, ${data.featured.image}` : missingImage} alt={data.featured.username} />
                  </div>
                  <Description>
                    <strong>{data.featured.fullname}</strong>
                    <pre>{data.featured.description}</pre>
                    <a href={data.featured.url}>{truncateString(data.featured.url,30)}</a>
                  </Description>
                </div>
                <BadgeContainer>
                {returnCategoryData(data.featured.category).map((el, i) =>
                  { return <Badge key={i} colorIndex={i}>{`${el[0]} ${el[1]}`}</Badge> })}
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
                    {returnCategoryData(element.category).map(cat => {
                        return(
                          <span key={cat}>{cat[0]}</span>
                        )
                    })
                    }
                    </div>
                </Slot>
              )
            })}
          </SlotHolder>
          <ButtonOutline onClick={() => changeModalState()}>Quiero salir de la lista</ButtonOutline>
        </>
      }

      {!dataFetching && !dataFound &&
        <>Explotó todo a la mierda...</>
      }
    </Wrapper>
    </>
  )
}


export default Instagram
