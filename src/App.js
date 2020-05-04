//Core
import React, { useState, useMemo } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styled from 'styled-components'
//Components
import Day from './views/Day'
//Context
import { CalendarContext } from './CalendarContext'

//Modal
import Modal from './components/Modal'

//Assets
import logo from './assets/logo.svg'
//API
import { userList } from './api'
import { getToday } from './helpers/date'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Header = styled.header`
  text-align: center;
  margin: 0 auto;
  padding: 1.3em 0;
`

const Logo = styled.img`
max-width: 250px;
`

const App = () => {
  //Modal
  const [modalState, setModalState] = useState(false)
  const changeModalState = () => setModalState(!modalState);

  const [value, setValue] = useState({
    selectedDay: '',
    niceDay: '',
    selectedTime: '',
    user: 'elmiauro',
    pin: '0000'
  });

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  //Add item
  async function addItem(value) {
    changeModalState();
  }

  return (
    <Router>
      <Container>
        <Header>
          <Link to="/"><Logo src={logo} alt="logo" /></Link>
        </Header>
        <Switch>
          {/* Default path */}
          <Route exact path="/" render={() => (
            <Redirect to={`${getToday()}`} />
          )} />
          <Route path="/:date">
            <CalendarContext.Provider value={providerValue}>
              {modalState ?
                <Modal
                  title='Anotarte'
                  close={changeModalState}
                  addItemToList={addItem}
                  content='0'
                ></Modal> : null}
              <Day list={userList} triggerModal={changeModalState}/>
            </CalendarContext.Provider>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
export default App
