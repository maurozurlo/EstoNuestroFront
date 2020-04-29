import styled from 'styled-components'
import React, { useState } from 'react'

const ModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  min-width: 100%;
  min-height:100%;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;`

const ModalCard = styled.div`
  z-index: 9999;
  background: #FFDF8C;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 225px;
  padding: 0 24px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px #e0e0e0;

  & h2{
    text-align: center;
    color: #2A0D08;
  }

  & input{
      border: 1px solid #F65D33;
      background: #FBFBFB;
      min-height: 40px;
      border-radius: 5px;
      margin-bottom: 24px;
      padding-left: 10px;
      font-size: 14px;
    }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
    font-weight: 600;
    border-radius: .3em;
    font-size: 16px;
    min-width: 90px;
    padding: 10px 0;
`

const ButtonPrimary = styled(Button)`
  background-color: #F87855;
    border: #F65D33;
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

const ButtonOutline = styled(Button)`
    border: 1px solid #ED894E;
    background-color: #FFC384;
    :hover{
      cursor: pointer;
      background: #F0A556;
    }
`



const Modal = (props) => {
  //Enable/disable button
  const [disabled, setDisabledState] = useState(true)
  const enableButton = () => setDisabledState(false)
  const disableButton = () => setDisabledState(true)
  //Input
  const handleInput = (e) => {
    setItemState(e.target.value)
    if (e.target.value !== '') {
      enableButton()
    } else {
      disableButton()
    }
  }
  const [itemValue, setItemState] = useState('')

  return (
    <ModalContainer>
      <ModalCard>
        <h2>Anotarte el {props.day} a las {props.time}hs</h2>
        <input
        type="text"
        value={itemValue} 
        placeholder="Tu usuario de Instagram!..."
        onChange={handleInput}
        autoFocus/>
        <ButtonContainer>
          <ButtonOutline onClick={props.close} >Cancelar</ButtonOutline>
          <ButtonPrimary disabled={disabled} onClick={() => props.addItemToList(itemValue)}>Agregar</ButtonPrimary>
        </ButtonContainer>
      </ModalCard>
    </ModalContainer>
  )
}

export default Modal