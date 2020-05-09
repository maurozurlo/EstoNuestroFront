import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'
//Components
import ButtonContainer from './ButtonContainer'
import { CalendarContext } from '../../CalendarContext'

const Description = styled.p`
  color: var(--text-dark);
  margin: 0;
  padding: 10px 5px;
`

const ViewSlot = (props) => {
  const { value } = useContext(CalendarContext);

  const checkIfMoreThanOneUser = () => {
    console.log(value.user)
    const users = value.user.split(", @");

    const One = () => {
      return (
        <>
          <a href={`https://instagram.com/${value.user}`}>
            {`@${value.user}`}</a> está anotadx
        </>
      )
    }

    const Many = users.map((item, i) => {
      return (
        <Fragment key={i}>
          {i === users.length - 1 ? 'y ' : ''}
          <a href={`https://instagram.com/${item}`}>@{item}</a>
          {i === users.length - 1 ? ' están anotadxs' : ', '}
        </Fragment>
      );
    });

    return users.length === 1 ? <One /> : Many;
  }


  return (
    <>
      <Description>
        {checkIfMoreThanOneUser()}<strong> {value.niceDay}</strong> a las <strong>{value.selectedTime}hs.</strong><br /></Description>
      <ButtonContainer
        action={props.close}
        close={() => props.action(['Liberar horario', 4])}
        secondaryText="Liberar"
        primaryText="Aceptar"
      />
    </>
  )
}

export default ViewSlot;
