import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-weight: 600;
  border-radius: var(--border-radius);
  font-size: 16px;
  min-width: 90px;
  padding: 10px 30px;
  background-color: var(--button-primary);
  border: var(--button-primary);
  color: var(--button-primary-text);
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

const PrimaryButton = (props) => {
  return (
    <Button onClick={props.action} disabled={props.disabled}>
      {props.primaryText}
    </Button>
  )
}

export default PrimaryButton;