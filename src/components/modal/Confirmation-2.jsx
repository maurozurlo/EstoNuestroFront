import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../atoms/PrimaryButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const reloadPage = () => {
  window.location.reload();
}

const Confirmation2 = () => {
  return (
    <Wrapper>
      <p>Por favor recordá buscar el usuario y contraseña para poder hacer el vivo desde nuestra cuenta en el grupo de WhatsApp.<br />
        Si necesitás ayuda para hacer un vivo, <a href='https://docs.google.com/document/d/1Ow7tgtoLjvvyypAQUbfEgV7vMjmYJzt4l05HSFMf02c'>hacé click acá.</a></p>
      <ButtonPrimary action={() => reloadPage()} primaryText="Aceptar" />
    </Wrapper>
  )
}

export default Confirmation2;
