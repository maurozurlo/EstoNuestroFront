//Core
import React, { useState, useEffect } from 'react'
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
import Modal from './components/Modal'
//Assets
import logo from './assets/logo.svg'
//API
import { getAllListItems, addItemToList, deleteItemFromList } from './api'
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
  const [selectedDay, setSelectedDay] = useState('Lunes 13 de Abril');
  const [selectedTime, setSelectedTime] = useState(null);



  const getSelectedTime = (time) => {
    setSelectedTime(time);
    changeModalState();
    console.log(getAllListItems());
  }

  //Add item
  async function addItem(value) {
    changeModalState();
    console.log(value);
    /* try{
      await addItemToList(value)
      .then(fetchData())
    } catch(err){
      console.log(err)
    } */
  }

  //List handling
  const [list, setList] = useState([]);
  //Get all data
  async function fetchData() {
    try {
      const res = await getAllListItems()
      setList(res)
    } catch (err) {
      console.log(err)
    }
  }

  //Initialize list
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Router>
      {modalState ?
        <Modal close={changeModalState}
          day={selectedDay}
          time={selectedTime}
          addItemToList={addItem}
        ></Modal> : null}
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
            <Day setParentTime={getSelectedTime}/>
          </Route>
          <Route path="/users">
            <p>USERS PAGE</p>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
export default App
