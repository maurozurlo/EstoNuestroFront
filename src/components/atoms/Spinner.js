import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

const Wrapper = styled.div`
  background: var(--spinner);
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;

  &:before, &:after {
    background: var(--spinner);
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  color: var(--spinner);
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:before, &:after {
    position: absolute;
    top: 0;
    content: '';
  }

  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }
`

const Spinner = () => {
  return (
    <Container>
      <Wrapper>Cargando datos.. </Wrapper>
    </Container>
  )
}

export default Spinner