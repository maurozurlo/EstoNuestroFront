import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../atoms/PrimaryButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ForgotPin = (props) => {
  return (
    <Wrapper>
      <p>Por favor comentanos en el <strong>grupo de WhatApp</strong> y vamos a ayudarte lo más rápido posible!</p>
      <ButtonPrimary action={props.close} primaryText="Aceptar" />
    </Wrapper>
  )
}

export default ForgotPin;
