import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../atoms/PrimaryButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  font-weight: 600;
  border-radius: var(--border-radius);
  font-size: 16px;
  min-width: 90px;
  padding: 10px 30px;
`

const ButtonOutline = styled(Button)`
  border: 1px solid var(--text-light);
  background-color: var(--text-light);
  color: var(--text-dark);
  :hover{
    cursor: pointer;
    border-color: var(--button-outline-hover);
    background-color: var(--button-outline-hover);
  }
`
const ButtonContainer = (props) => {
  return (
    <Wrapper>
      <ButtonOutline onClick={props.close} >{props.secondaryText}</ButtonOutline>
      <ButtonPrimary
        disabled={props.disabled}
        action={props.action}
        primaryText={props.primaryText}
      />
    </Wrapper>
  )
}

export default ButtonContainer;