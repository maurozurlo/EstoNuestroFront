//Core
import React, { useState, useEffect, useMemo } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

import styled from 'styled-components'
//Components
import Navigation from './components/particles/Navigation'
//Views
import Day from './views/Day'
import Info from './views/Info'
import Instagram from './views/Instagram'
//Context
import { CalendarContext } from './CalendarContext'
//Modal
import Modal from './components/Modal'
//Assets
import logo from './assets/logo.svg'
//API
import { getToday } from './helpers/date'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  hr{
    max-width: 650px;
    width: 100%;
    border-color: var(--gradient-top);
    opacity: .3;
  }
`

const Header = styled.header`
  margin: 0 auto;
  width: 90%;
  max-width: 650px;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    display: inline-block;
    line-height: 0;
    width: 90%;
    max-width: 200px;
  }
`
const trackingId = "UA-166030746-1";
ReactGA.initialize(trackingId)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

const App = () => {
  //GA
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  //Get local storage
  const getLocalStorage = () => {
    const val = JSON.parse(localStorage.getItem('onboarding'));
    return val !== null ? val : true;
  }
  //Modal
  const [modalState, setModalState] = useState(getLocalStorage())
  const changeModalState = () => setModalState(!modalState);
  const [modalContent, setModalContent] = useState(['Bienvenidx', '8'])

  const [value, setValue] = useState({
    selectedDay: '', niceDay: '', selectedTime: '', user: '', pin: ''
  });

  const displayModal = (title, content) => {
    setModalContent([title, content]);
    changeModalState();
  }

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <Router>
      <Container>
        <Header>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </Header>
        <hr />
        <Navigation />
        <hr />
        <Switch>
          {/* Default path */}
          <Route exact path="/" render={() => (
            <Redirect to={`/dia/${getToday()}`} />
          )} />
          <Route exact path="/dia" render={() => (
            <Redirect to={`/dia/${getToday()}`} />
          )} />
          <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/instagram">
            <Instagram />
          </Route>
          <Route path="/dia/:date">
            <CalendarContext.Provider value={providerValue}>
              {modalState ?
                <Modal
                  title='Anotarte'
                  close={changeModalState}
                  content={modalContent}
                ></Modal> : null}
              <Day triggerModal={displayModal} />
            </CalendarContext.Provider>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
export default App
