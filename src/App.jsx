import React, { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import ReactGA from 'react-ga4';
import styled from 'styled-components';

// Components
import Navigation from './components/particles/Navigation';
import Modal from './components/Modal';
// Views
import Day from './views/Day';
import Info from './views/Info';
import Instagram from './views/Instagram';
import Register from './views/Register';
// Context
import { CalendarContext } from './CalendarContext';
// Assets
import logo from './assets/logo.svg';
// API
import { getToday } from './helpers/date';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  hr {
    max-width: 650px;
    width: 100%;
    border-color: var(--gradient-top);
    opacity: 0.3;
  }
`;

const Header = styled.header`
  margin: 0 auto;
  width: 90%;
  max-width: 650px;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: inline-block;
    line-height: 0;
    width: 90%;
    max-width: 200px;
  }
`;

// Google Analytics
const trackingId = 'UA-166030746-1';
ReactGA.initialize(trackingId);

// GA PageView Listener
const GAListener = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hit: "pageview", page: location.pathname + location.search });
  }, [location]);
  return null;
};

const AppRoutes = () => {
  // Get local storage
  const getLocalStorage = () => {
    const val = JSON.parse(localStorage.getItem('onboarding'));
    return val !== null ? val : true;
  };

  // Modal
  const [modalState, setModalState] = useState(getLocalStorage());
  const changeModalState = () => setModalState(!modalState);
  const [modalContent, setModalContent] = useState(['Bienvenidx', '8']);

  const [value, setValue] = useState({
    selectedDay: '',
    niceDay: '',
    selectedTime: '',
    user: '',
    pin: '',
  });

  const displayModal = (title, content) => {
    setModalContent([title, content]);
    changeModalState();
  };

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <Container>
      <GAListener />
      <Header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Header>
      <hr />
      <Navigation />
      <hr />
      <Routes>
        <Route path="/" element={<Navigate to={`/dia/${getToday()}`} />} />
        <Route path="/dia" element={<Navigate to={`/dia/${getToday()}`} />} />
        <Route path="/info" element={<Info />} />
        <Route path="/instagram/register" element={<Register />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route
          path="/dia/:date"
          element={
            <CalendarContext.Provider value={providerValue}>
              {modalState && (
                <Modal
                  title="Anotarte"
                  close={changeModalState}
                  content={modalContent}
                />
              )}
              <Day triggerModal={displayModal} />
            </CalendarContext.Provider>
          }
        />
      </Routes>
    </Container>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
