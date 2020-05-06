import React from 'react'
import styled from 'styled-components'

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

const ButtonOutline = styled(Button)`
  border: 1px solid var(--text-light);
  background-color: var(--text-light);
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
      <ButtonPrimary disabled={props.disabled} onClick={props.action}>{props.primaryText}</ButtonPrimary>
    </Wrapper>
  )
}

export default ButtonContainer;