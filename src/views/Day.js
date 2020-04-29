import React, {useState} from 'react' 
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
//Components
import Row from '../components/calendar/Row'
//Assets 
import arrow from '../icons/arrow.svg'

import {getYesterday, getTomorrow, getFormattedDate} from '../helpers/date'

const Wrapper = styled.div`
background: rgba(255,255,255,0.3);
border-top: 2px solid rgba(255,255,255,0.4);
border-bottom: 2px solid rgba(255,255,255,0.4);
margin: 0 auto;
width: 100%;
max-width: 650px;
text-align: center;
box-sizing: border-box;
font-size: .8em;
`

const SubHeader = styled.div`
border-top: 2px solid rgba(255,255,255,0.4);
border-bottom: 2px solid rgba(255,255,255,0.4);
margin: 0 auto;
width: 90%;
max-width: 650px;
text-align: center;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;
padding: 5px 0;

a{
  display: inline-block;
    width: 35px;
    line-height: 0;
}

a:first-of-type{
  transform: scaleX(-1);
}
`

const slots = [
  {time: '17', hex:'ED894E'},
  {time: '18', hex:'EB844B'},
  {time: '19', hex:'EA8048'},
  {time: '20', hex:'E77843'},
  {time: '21', hex:'E4703D'},
  {time: '22', hex:'E26838'},
  {time: '23', hex:'E06335'},
  {time: '0', hex:'DF5F32'},
  {time: '1', hex:'DD572D'},
  {time: '2', hex:'D84722'}
]

const list = {
  '29-04-2020':{
    17: 'belu.piccoli',
    18: 'leia_oriana',
    20: 'kiefa',
    21: 'santile.n',
    22: 'pachaysuimaginario',
    23: 'textotendido',
    0: 'matias.va.con.tilde'
  },
  '30-04-2020': {
    17: 'sol.morgante',
    18: 'valentinaliff',
    19: 'deboh.ingenia',
    20: 'flordelsur.cl',
    21: 'ema_sementa87',
    22: 'mateo.zucco',
    23: 'musicamistica'
  }
}

const Day = (props) => {
  const { date } = useParams()
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTime = (val) => {
    setSelectedTime(val); //Save selectedTimeInComponent
    props.setParentTime(val) //Set selectedTime for Modal;
  }

  const returnUser = (hour) =>{
    return list[date] ? list[date][hour] : null
  }
  
  return (
    <>
    <SubHeader>
          <Link to={`${getYesterday(date)}`}>
              <img src={arrow} alt="" />
          </Link>
          
          <p>{getFormattedDate(date)}</p>
          
          <Link to={`${getTomorrow(date)}`}>
              <img src={arrow} alt=""/>
          </Link>
        </SubHeader>
    <Wrapper>
    {slots.map((element,i) => 
        <Row 
        key={i}
        hour={element.time}
        bg={element.hex}
        handleClick={handleTime}
        user={returnUser(element.time)}
        />
      )}
    </Wrapper>
    </>
  )

}


export default Day