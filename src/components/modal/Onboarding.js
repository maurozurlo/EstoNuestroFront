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

const Onboarding = (props) => {

  const setLocalStorageAndClose = () =>{
    localStorage.setItem('onboarding','false');
    props.close();
  }
  return (
    <Wrapper>
      <Description>Hola, bienvenidx a <a href="https://instagram.com/estonuestro">@EstoNuestro</a>!<br />
         Un espacio creado a modo de “escenario virtual” en Instagram, donde lxs artistas pueden sumarse a mostrar su arte día a día, y contando con falicilitadorxs dispuestxs a ayudarles con cualquier duda.<br />
      Si querés saber más, <a href='/info'>hacé click acá.</a></Description>
      <ButtonPrimary onClick={() => setLocalStorageAndClose()}>Aceptar</ButtonPrimary>
    </Wrapper>
  )
}

export default Onboarding;
