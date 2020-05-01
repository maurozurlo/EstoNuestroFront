import React, {useContext} from 'react'
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
//Components
import Row from '../components/calendar/Row'
//Assets 
import Arrow from '../icons/Arrow'
//Helpers
import { getYesterday, getTomorrow, getFormattedDate } from '../helpers/date'
import { getHex } from '../helpers/colors'
//Context
import {CalendarContext} from '../CalendarContext'

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

p{
  color: var(--text-dark);
}

a{
  display: inline-block;
  width: 35px;
  line-height: 0;
  &:first-of-type{
    transform: scaleX(-1);
  }
  &>svg{
    fill: var(--icon);
    :hover{
      fill: var(--hover-icon);
    }
  }
}
`
//Horas a las que se pueden anotar
const slots = [17, 18, 19, 20, 21, 22, 23, 0, 1, 2];
//Extreme colors
const colors = ['#30769C', '#48A8DB']

const Day = (props) => {
  const { date } = useParams()
  const { setValue } = useContext(CalendarContext);

  const handleTime = (val) => {
    setValue({
      selectedDay: date,
      niceDay: getFormattedDate(date),
      selectedTime: val,
      user: ''
    });
    //Open modal
    props.triggerModal();
    //props.setParentTime(val, getFormattedDate(date)) //Set selectedTime for Modal;
  }

  const returnUser = (hour) => {
    return props.list[date] ? props.list[date][hour] : null
  }

  return (
    <>
      <SubHeader>
        <Link to={`${getYesterday(date)}`}>
          <Arrow />
        </Link>

        <p>{getFormattedDate(date)}</p>

        <Link to={`${getTomorrow(date)}`}>
          <Arrow />
        </Link>
      </SubHeader>
      <Wrapper>
        {slots.map((element, i) =>
          <Row
            key={i}
            hour={element}
            bg={getHex(colors[0], colors[1], i)}
            handleClick={handleTime}
            user={returnUser(element)}
          />
        )}
      </Wrapper>
    </>
  )

}


export default Day