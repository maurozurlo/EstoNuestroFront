import React, { Fragment, useContext } from 'react'
//Components
import ButtonContainer from './ButtonContainer'
import { CalendarContext } from '../../CalendarContext'

const ViewSlot = (props) => {
  const { value } = useContext(CalendarContext);

  const checkIfMoreThanOneUser = () => {
    const users = value.user.split(", @");

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
        {i === users.length-1 ? 'y ' : ''}
        <a  href={`https://instagram.com/${item}`}>@{item}</a>
        {i === users.length-1 ? ' están anotadxs el' : ', '}
        </Fragment>
      );
    });

    return users.length === 1 ? <One /> : Many;
  }

  
  return (
    <>
      <p>
        {checkIfMoreThanOneUser()}<strong> {value.niceDay}</strong> a las <strong>{value.selectedTime}hs.</strong><br /></p>
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
