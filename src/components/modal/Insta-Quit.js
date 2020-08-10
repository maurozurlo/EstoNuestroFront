import styled from 'styled-components'
import React from 'react'
import PrimaryButton from '../atoms/PrimaryButton'

//Components
const ModalContainer = styled.div`
  z-index: 999;
  background: var(--modal-overlay);
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation-name: fadeIn;
  animation-duration: .2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  `

const ModalCard = styled.div`
  bottom: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  background: var(--gradient-top);
  width: 90vw;
  max-width: 350px;
  padding: 0 .8em;
  border-radius: 2px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;

  h2{
    text-align: center;
    font-weight: 600;
    color: var(--text-dark);
    font-size: 1.1em;
  }
  img{
    width: 35px;
    background: var(--text-light);
    height: 35px;
    padding: .5em;
    border-radius: 100%;
  }
`

const ModalContent = styled.div`
  padding-bottom: 20px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ButtonContainer = styled.div`
margin-top: 6px;
button{
  display: block;
  margin: 0 auto;
}
`

const Modal = (props) => {
  return (
    <ModalContainer>
      <ModalCard>
        <ModalHeader>
          <h2>Salir de la lista</h2>
        </ModalHeader>
        <ModalContent>
          <Wrapper>
            <p>Te recordamos que una vez que ingresás tu cuenta a la lista, al cabo de dos semanas desaparece automáticamente.<br></br>
                      En caso de no querer esperar a que pasen dos semanas, o para cualquier otra consulta podés contactarte directamente por mensaje directo a <a href="https://www.instagram.com/elmiauro">@elmiauro</a>.</p>
            <ButtonContainer>
              <PrimaryButton
                primaryText="Buenísimo"
                action={() =>props.changeModalState()}
              />
            </ButtonContainer>
          </Wrapper>
        </ModalContent>
      </ModalCard>
    </ModalContainer>
  )
}

export default Modal
