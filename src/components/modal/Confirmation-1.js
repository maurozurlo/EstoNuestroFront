import React from 'react'
import styled from 'styled-components'

const Description = styled.p`
  color: var(--text-dark);
  margin: 0;
  padding: 10px 5px;
`

const Button = styled.button`
  font-weight: 600;
  border-radius: var(--border-radius);
  font-size: 16px;
  min-width: 90px;
  padding: 10px 80px;
`

const ButtonPrimary = styled(Button)`
  background-color: var(--button-primary);
  border: var(--button-primary);
  color: white;
  :hover{
    filter: contrast(1.5);
    cursor: pointer;
  }
  :disabled,
  [disabled]{
    border: 1px solid #939393;
    background-color:#f5f5f5;
    color: #939393;
  }
`

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

const Confirmation1 = (props) => {

  return (
    <Wrapper>
      <Description>
        <a href='https://instagram.com/elmiauro'>@elmiauro</a>
         está anotado el lunes 3/4 a las 17hs.<br />
        Por favor <strong>guardá tu pin</strong>:</Description>
      <PinHolder>1234</PinHolder>
      <Description>Guardar el pin te sirve en caso de que quieras editar esta info.</Description>
      <ButtonPrimary onClick={() => props.action(['Una última cosa!',2])}>Aceptar</ButtonPrimary>
    </Wrapper>
  )
}

export default Confirmation1;
