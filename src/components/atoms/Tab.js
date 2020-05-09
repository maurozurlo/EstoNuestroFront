import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3em;
    flex-grow: .5;
`
const activeClassName = 'active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width: 100%;
  text-align: center;
  color: var(--text-dark);
  text-decoration: none; /* no underline */
  svg {
    fill: var(--text-dark);
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  &.${activeClassName} {
    color: var(--button-primary);
    span {
      border-bottom: 2px solid var(--button-primary);
    }

    svg {
      fill: var(--button-primary);
    }
  }
`;


const Tab = (props) => {

  return (
    <Wrapper>
      <StyledLink exact to={props.link}>
        <span>{props.icon} {props.label}</span>
      </StyledLink>
    </Wrapper>
  )
}

export default Tab

