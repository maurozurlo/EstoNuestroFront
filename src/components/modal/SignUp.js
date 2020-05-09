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

const SignUp = (props) => {
  const { value, setValue } = useContext(CalendarContext);
  //Input
  const handleInput = (e) => {
    const cleanString = e.target.value.replace(/[^a-zA-Z0-9-_.%]/g, "")
    setUsername(cleanString)
  }

  const [username, setUsername] = useState(value.user)
  const [error, setError] = useState('')

  const checkUsernameLength = () => {
    if (username === undefined || username.length < 3) {
      setError('El nombre de usuario debe tener mínimo 3 letras.');
    } else {
      setValue({ ...value, ...{ 'user': username } });
      props.action(['Anotarte', 1]);
    }
  }

  return (
    <>
      <Description>Por favor ingresá tu usuario de Instagram <u><i>sin arroba</i></u> para anotarte el <strong>{value.niceDay}</strong> a las <strong>{value.selectedTime}hs</strong><br />
      <small>Psst!... podes agregar hasta 3 personas más usando el símbolo <strong>%</strong></small></Description>
      <Input
        type="text"
        value={username}
        placeholder="Tu usuario de Instagram..."
        onChange={handleInput}
        maxLength="123"
        autoFocus />
      <ErrorMsg>{error}</ErrorMsg>
      <ButtonContainer
        action={() => checkUsernameLength()}
        close={props.close}
        secondaryText="Cancelar"
        primaryText="Anotarme"
      />
    </>
  )
}

export default SignUp;
