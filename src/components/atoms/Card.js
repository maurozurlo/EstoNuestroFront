import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.3);
    border: 1px solid var(--button-outline-hover);
    padding: 1em;
    border-radius: var(--border-radius);
    margin-bottom: 1em;

    h2, h3{
      color: var(--text-dark);
      margin: 0;
      text-align: center;
    }

    h2{
      font-size: 1.3em;
    }

    p {
    color: var(--text-dark);
    font-weight: 500;
    font-size: 1em;
    margin: 0;

    &.centered{
      text-align: center;
    }
  }
`
const Card = (props) => {
  return(
    <Wrapper>
      {props.content}
    </Wrapper>
  )

}

export default Card;