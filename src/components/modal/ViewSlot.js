import React, { useContext } from 'react'
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
  
  return (
    <>
      <Description> <a href={`https://instagram.com/${value.user}`}>@{value.user}</a> está anotadx el <strong>{value.niceDay}</strong> a las <strong>{value.selectedTime}hs.</strong><br /></Description>
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
