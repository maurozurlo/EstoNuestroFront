import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../atoms/PrimaryButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Onboarding = (props) => {

  const setLocalStorageAndClose = () =>{
    localStorage.setItem('onboarding','false');
    props.close();
  }
  return (
    <Wrapper>
      <p>Hola, bienvenidx a <a href="https://instagram.com/estonuestro">@EstoNuestro</a>!<br />
         Un espacio creado a modo de “escenario virtual” en Instagram, donde lxs artistas pueden sumarse a mostrar su arte día a día, y contando con falicilitadorxs dispuestxs a ayudarles con cualquier duda.<br />
      Si querés saber más, <a href='/info'>hacé click acá.</a></p>
      <ButtonPrimary action={() => setLocalStorageAndClose()} primaryText="Aceptar" />
    </Wrapper>
  )
}

export default Onboarding;
