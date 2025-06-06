import React, { useState, useContext, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'
//Components
import Row from '../components/calendar/Row'
import Spinner from '../components/atoms/Spinner'
//Assets 
import Arrow from '../icons/Arrow'
//Helpers
import { getYesterday, getTomorrow, getFormattedDate, checkIfDateIsBeforeToday } from '../helpers/date'
import { getHex } from '../helpers/colors'
//Context
import { CalendarContext } from '../CalendarContext'
// API
import { getDate } from '../components/handlers/api';

const Wrapper = styled.div`
background: var(--card-background);
margin: 0 auto;
width: 100%;
max-width: 650px;
text-align: center;
box-sizing: border-box;
font-size: .8em;
padding: 10px 0;
margin-bottom: 24px;
`

const SubHeader = styled.div`
margin: 16px auto;
width: 90%;
max-width: 650px;
text-align: center;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;

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

  const handleTime = (slot, title, content, user) => {
    setValue({
      selectedDay: date,
      niceDay: getFormattedDate(date),
      selectedTime: slot,
      user: user
    });
    //Check if date is older than today && open modal
    if (!checkIfDateIsBeforeToday(date)) {
      if (content === '0')
        props.triggerModal('Ehm...', '7');
      else
        props.triggerModal(title, content);
    } else {
      props.triggerModal(title, content);
    }
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
        console.error(error)
        setDayFound(false)
      }
      )
  }, [date]);

  const returnUser = (hour) => {
    return day.contents ? checkIfMultipleUsers(day.contents[hour]) : null
  }

  const checkIfMultipleUsers = (val) => {
    if (val !== undefined) {
      const users = val.split('%');
      return users.length > 1 ? users.join(", @") : val;
    }
    return null;
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