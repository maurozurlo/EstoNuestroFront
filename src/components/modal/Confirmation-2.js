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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const reloadPage = () =>{
  window.location.reload();
}

const Confirmation2 = (props) => {
  return (
    <Wrapper>
      <Description>Por favor recordá buscar el usuario y contraseña para poder hacer el vivo desde nuestra cuenta en el grupo de WhatsApp.<br />
      Si necesitás ayuda para hacer un vivo, <a href='https://docs.google.com/document/d/1Ow7tgtoLjvvyypAQUbfEgV7vMjmYJzt4l05HSFMf02c'>hacé click acá.</a></Description>
      <ButtonPrimary onClick={() => reloadPage()}>Aceptar</ButtonPrimary>
    </Wrapper>
  )
}

export default Confirmation2;
