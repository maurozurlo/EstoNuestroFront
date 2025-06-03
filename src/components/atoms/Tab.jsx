import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  flex-grow: 0.5;
`;

const StyledLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  color: var(--text-dark);
  text-decoration: none;

  svg {
    fill: var(--text-dark);
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  &.active {
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
      <StyledLink
        to={props.link}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        {props.icon} <br />
        <span>{props.label}</span>
      </StyledLink>
    </Wrapper>
  );
};

export default Tab;
