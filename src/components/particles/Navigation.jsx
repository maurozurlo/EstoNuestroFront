import React from 'react'
import styled from 'styled-components'
import Tab from '../atoms/Tab'
//Icons
import Calendar from '../../icons/Calendar'
import Info from '../../icons/Info'
import Instagram from '../../icons/Instagram'

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

const Navigation = () => {
  return (
    <Wrapper>
      <Tab
        link={`/dia`}
        icon={<Calendar />}
        label='Calendario' />
      <Tab
        link={'/info'}
        icon={<Info />}
        label='Información' />
      <Tab
        link={'/instagram'}
        icon={<Instagram />}
        label='Te seguimos!' />
    </Wrapper>
  )
}

export default Navigation