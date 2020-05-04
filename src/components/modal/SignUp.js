import React, {useState, useContext} from 'react'
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
  margin-bottom: 24px;
  padding-left: 10px;
  font-size: 14px;
  width: 100%;
  
`

const SignUp = (props) => {
  const { value } = useContext(CalendarContext);
  //Enable/disable button
  const [disabled, setDisabledState] = useState(true)
  //Input
  const handleInput = (e) => {
    setUsername(e.target.value)
    e.target.value !== '' ? setDisabledState(false) : setDisabledState(true);
  }

  const [username, setUsername] = useState('')

  return (
    <>
      <Description>Por favor ingresá tu usuario de Instagram para anotarte el {value.niceDay} a las {value.selectedTime}hs</Description>
      <Input
        type="text"
        value={username}
        placeholder="Tu usuario de Instagram!..."
        onChange={handleInput}
        autoFocus />
      <ButtonContainer
      action={() => props.action(['Felicidades',1])}
      close={props.close}
      buttonState={disabled}
       />
    </>
  )
}

export default SignUp;
