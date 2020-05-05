import React, { useState, useContext, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
//Components
import Row from '../components/calendar/Row'
import Spinner from '../components/atoms/Spinner'
//Assets 
import Arrow from '../icons/Arrow'
//Helpers
import { getYesterday, getTomorrow, getFormattedDate } from '../helpers/date'
import { getHex } from '../helpers/colors'
//Context
import { CalendarContext } from '../CalendarContext'
// API
const { getDate } = require('../components/handlers/api');

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

  const [dayFound, setDayFound] = useState(false);
  const [dayFetching, setDayFetching] = useState(true);
  const [day, setDay] = useState({
    contents: {}
  })

  const handleTime = (val) => {
    setValue({
      selectedDay: date,
      niceDay: getFormattedDate(date),
      selectedTime: val
    });
    //Open modal
    props.triggerModal();
    //props.setParentTime(val, getFormattedDate(date)) //Set selectedTime for Modal;
  }

  //Api Fetch
  useEffect(() => {
    setDayFetching(true);

    getDate(date)
      .then(res => {
        setDayFetching(false);

        if (res) {
          setDayFound(true);
          setDay(res);
        } else {
          setDayFound(false)
        }
      })
      .catch(error => {
        setDayFound(false)
      }
      )
  }, [date]);

  const returnUser = (hour) => {
    return day.contents ? day.contents[hour] : null
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

        {dayFetching && (
          <Spinner />
        )}
        {!dayFetching && dayFound &&
          slots.map((element, i) =>
            <Row
              key={i}
              hour={element}
              bg={getHex(colors[0], colors[1], i)}
              handleClick={handleTime}
              user={returnUser(element)}
            />
          )
        }
        {!dayFetching && !dayFound &&
          slots.map((element, i) =>
            <Row
              key={i}
              hour={element}
              bg={getHex(colors[0], colors[1], i)}
              handleClick={handleTime}
              user={null}
            />
          )
        }
      </Wrapper>
    </>
  )

}


export default Day