import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
//Components
import Spinner from '../atoms/Spinner'
import ButtonPrimary from '../atoms/PrimaryButton'
import ButtonContainer from './ButtonContainer'
//Context
import { CalendarContext } from '../../CalendarContext'
// API
import { removeUser } from '../handlers/api'

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

const DeleteSlot1 = (props) => {
  const { value } = useContext(CalendarContext);
  //Request sample
  /* {
"permalink": "01-05-2020",
"date": "01-05-2020",
"time": "17",
"pin": "1234"
} */

  const [pinFound, setPinFound] = useState(false);
  const [pinFetching, setPinFetching] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const reqBody = {
      permalink: value.selectedDay,
      date: value.selectedDay,
      time: value.selectedTime,
      pin: value.pin
    }

    if (!pinFound) {
      setPinFetching(true);

      removeUser(reqBody)
        .then(res => {
          setPinFetching(false);

          if (res.status === 200) {
            setPinFound(true);
            setMessage('No errors');
          }
          else {
            setMessage(res);
            setPinFound(false)
          }
        })
    }
  }, [message, value.pin, value.selectedDay, value.selectedTime, pinFound]);

  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <Wrapper>
      {pinFetching && (
        <Spinner />
      )}
      {!pinFetching && pinFound &&
        <>
          <p>Perfectirijillo! el horario fue liberado correctamente.</p>
          <ButtonPrimary action={() => reloadPage()} primaryText="Aceptar" />
        </>}
      {!pinFetching && !pinFound &&
        <>
          <ErrorMsg>{message}</ErrorMsg>
          <ButtonContainer
            action={props.close}
            primaryText="Aceptar"
            close={() => props.action(['Tranqui!', 6])}
            secondaryText="Me olvidé mi pin"
          />
        </>
      }
    </Wrapper>
  )
}

export default DeleteSlot1;
