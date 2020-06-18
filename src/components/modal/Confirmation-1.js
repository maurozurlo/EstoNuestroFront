import React, { useState, useContext, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import Spinner from '../atoms/Spinner'
import ButtonPrimary from '../atoms/PrimaryButton'
//Context
import { CalendarContext } from '../../CalendarContext'
// API
const { addUser } = require('../handlers/api');

const PinHolder = styled.div`
  font-size: 2em;
  background: var(--pin-holder);
  border-radius: var(--border-radius);
  color: var(--text-dark);
  font-weight: bold;
  width: 90%;
  max-width: 350px;
  text-align: center;
  margin: 10px auto;
  padding: 10px 35px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ErrorMsg = styled.p`
  color: var(--error-message);
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  padding: 0px 5px;
  padding-bottom: 10px;
  text-align: center;
`

const Confirmation1 = (props) => {
  const { value } = useContext(CalendarContext);
  //Request sample
  /* {
"permalink": "01-05-2020",
"date": "01-05-2020",
"time": "17",
"username": "elmiauro",
"pin": "1234"
} */

  const [pinFound, setPinFound] = useState(false);
  const [pinFetching, setPinFetching] = useState(true);
  const [pin, setPin] = useState('')
  const [message, setMessage] = useState('');

  useEffect(() => {
    const reqBody = {
      permalink: value.selectedDay,
      date: value.selectedDay,
      time: value.selectedTime,
      username: value.user,
      pin: value.pin
    }

    if (!pinFound) {
      setPinFetching(true);

      addUser(reqBody)
        .then(res => {
          setPinFetching(false);

          if (res.status === 200) {
            setPinFound(true);
            setPin(res.data.msg);
            setMessage('No errors');
          }
          else {
            setPin('');
            setMessage(res);
            setPinFound(false)
          }
        })
    }
  }, [pin, message, value.pin, value.selectedDay, value.selectedTime, value.user, pinFound]);

  const checkIfMoreThanOneUser = () => {
    const users = value.user.split("%");

    const One = () => {
      return (
        <>
          <a href={`https://instagram.com/${value.user}`}>
            {`@${value.user}`}</a> está anotadx el
        </>
      )
    }

    const Many = users.map((item, i) => {
      return (
        <Fragment key={i}>
          {i === users.length - 1 ? 'y ' : ''}
          <a href={`https://instagram.com/${item}`}>@{item}</a>
          {i === users.length - 1 ? ' están anotadxs el' : ', '}
        </Fragment>
      );
    });

    return users.length === 1 ? <One /> : Many;
  }

  return (
    <Wrapper>
      {pinFetching && (
        <Spinner />
      )}
      {!pinFetching && pinFound &&
        <>
          <p>
            {checkIfMoreThanOneUser()}
            <strong> {value.niceDay}</strong> a las <strong>{value.selectedTime}hs.</strong><br />
        Por favor <strong>guardá tu pin</strong>:</p>
          <PinHolder>{pin}</PinHolder>
          <p>Guardar el pin te sirve en caso de que quieras liberar este horario.</p>
          <ButtonPrimary action={() => props.action(['Una última cosa!', 2])} primaryText="Aceptar" />
        </>}
      {!pinFetching && !pinFound &&
        <>
          <ErrorMsg>{message}</ErrorMsg>
          <ButtonPrimary action={() => props.close()} primaryText="Aceptar" />
        </>
      }
    </Wrapper>
  )
}

export default Confirmation1;
