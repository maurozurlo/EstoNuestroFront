import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 15px;
`

const Hour = styled.div`
padding-right: 15px;
min-width: 55px;
font-weight: bold;
text-align: center;
text-transform: uppercase;
color: var(--text-dark);
`

const Slot = styled.div`
width: 100%;
font-weight: 600;
text-align: center;
background-color: var(--slot-background);
border: 2px solid var(--slot-background);
padding: 13px 0;
color: var(--slot-text);
border-radius: 5px;
cursor: pointer;
box-sizing: border-box;
transition: .15s ease all;

:hover{
  filter: contrast(1.5);
  border: 2px solid var(--slot-text);
}
`

const SelectedSlot = styled(Slot)`
  background-color: #${({ bg }) => bg};
  border: 2px solid #${({ bg }) => bg};
  color: white;
`

const Row = (props) => {
  return (
    
    <Wrapper>
      <Hour>{props.hour}hs</Hour>
      {props.user ? 
      <SelectedSlot onClick={() => props.handleClick(props.hour,'Horario','3',props.user)} bg={props.bg}>{`@${props.user}`}</SelectedSlot> : 
      <Slot onClick={() => props.handleClick(props.hour,'Anotarte','0','')}>¡Anotate en este espacio!</Slot>}
    </Wrapper>

  )
}


export default Row