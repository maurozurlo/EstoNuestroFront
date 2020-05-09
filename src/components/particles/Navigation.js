import React from 'react'
import styled from 'styled-components'
import Tab from '../atoms/Tab'
//Icons
import Calendar from '../../icons/Calendar'
import Info from '../../icons/Info'
//Date
import { getToday } from '../../helpers/date'

const Wrapper = styled.ul`
  list-style: none;
  margin: 0 auto;
  width: 90%;
  max-width: 650px;
  display: flex;
  padding: 0;
  align-items: center;
  border-radius: 5px 5px 0 0;
`

const Navigation = (props) => {
  return (
    <Wrapper>
          <Tab index={0}
          exact={false}
          link={`${getToday()}`}
          icon={<Calendar />}
          label='Calendario' />
          <Tab index={1}
          exact={true}
          link={'/info'}
          icon={<Info />}
          label='Información'  />
    </Wrapper>
  )
}

export default Navigation