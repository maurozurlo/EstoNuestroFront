import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  color: var(--text-dark);
  margin: 0;
  padding: 10px 5px;
`
const Description = (props) => {
  return(
    <Wrapper>
      {props.content}
    </Wrapper>
  )

}

export default Description;