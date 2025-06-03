import React from 'react'
import styled from 'styled-components'
import ButtonPrimary from '../atoms/PrimaryButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Confirmation2 = (props) => {
  return (
    <Wrapper>
      <p>La fecha que seleccionaste <strong>ya pasó</strong>.<br />
      Por favor seleccioná alguna <strong>fecha próxima</strong> para anotarte!</p>
      <ButtonPrimary action={() => props.close()} primaryText="Aceptar" />
    </Wrapper>
  )
}

export default Confirmation2;
