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

const ForgotPin = (props) => {
  return (
    <Wrapper>
      <Description>Por favor comentanos en el <strong>grupo de WhatApp</strong> y vamos a ayudarte lo más rápido posible!
      </Description>
      <ButtonPrimary onClick={props.close}>Aceptar</ButtonPrimary>
    </Wrapper>
  )
}

export default ForgotPin;
