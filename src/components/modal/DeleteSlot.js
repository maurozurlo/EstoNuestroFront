import React, { useState, useContext } from 'react'
import styled from 'styled-components'
//Components
import ButtonContainer from './ButtonContainer'
import { CalendarContext } from '../../CalendarContext'

const Description = styled.p`
  color: var(--text-dark);
  margin: 0;
  padding: 10px 5px;
`

const Input = styled.input`
  border: 1px solid var(--input-border);
  background: var(--input-background);
  min-height: 40px;
  border-radius: var(--border-radius);
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 14px;
  width: 100%; 
`

const ErrorMsg = styled.p`
  color: var(--error-message);
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  padding: 0px 5px;
  padding-bottom: 10px;
  text-align: center;
`

const DeleteSlot = (props) => {
  const { value, setValue } = useContext(CalendarContext);
  
  const [slotPin, setSlotPin] = useState(value.pin)
  const [error, setError] = useState('')
  //Input
  const handleInput = (e) => {
    const cleanString = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setSlotPin(cleanString)
    setValue({ ...value, ...{ 'pin': cleanString } });
  }

  const checkPinLength = () => {
    if (slotPin === undefined || slotPin.length < 3) {
      setError('El pin debe tener mínimo 4 números.');
    } else {
      props.action(['Liberar', 5]);
    }
  }

  return (
    <>
      <Description>Por favor ingresá el pin para poder liberar el horario <strong>{value.selectedTime}hs</strong> el <strong>{value.niceDay}</strong></Description>
      <Input
        type="text"
        value={slotPin}
        placeholder="Pin..."
        onChange={handleInput}
        autoFocus />
      <ErrorMsg>{error}</ErrorMsg>
      <ButtonContainer
        action={() => checkPinLength()}
        close={props.close}
        secondaryText="Cancelar"
        primaryText="Liberar"
      />
    </>
  )
}

export default DeleteSlot;
