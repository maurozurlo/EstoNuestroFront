import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Spinner from '../atoms/Spinner'
import PrimaryLinkBtn from '../atoms/PrimaryLinkBtn'

const { sendInstagramData } = require('../handlers/api');
//Components
const ModalContainer = styled.div`
  z-index: 999;
  background: var(--modal-overlay);
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation-name: fadeIn;
  animation-duration: .2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  `

const ModalCard = styled.div`
  bottom: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  background: var(--gradient-top);
  width: 90vw;
  max-width: 350px;
  padding: 0 .8em;
  border-radius: 2px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;

  h2{
    text-align: center;
    font-weight: 600;
    color: var(--text-dark);
    font-size: 1.1em;
  }
  img{
    width: 35px;
    background: var(--text-light);
    height: 35px;
    padding: .5em;
    border-radius: 100%;
  }
`

const ModalContent = styled.div`
  padding-bottom: 20px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ErrorMsg = styled.p`
  color: var(--error-message);
  font-size: 1em;
  font-weight: bold;
  margin: 0;
  padding: 0px 5px;
  padding-bottom: 10px;
  text-align: center;
`

const ButtonContainer = styled.div`
margin-top: 6px;
button{
  display: block; 
  margin: 0 auto;
}
`

const Modal = (props) => {
    const [apiCall, setApiCall] = useState(false);
    const [apiFetching, setApiFetching] = useState(true);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!apiCall) {
                setApiFetching(true);
                const data = new FormData();
                data.append('username',props.payload.username)
                data.append('category',props.payload.category)
                data.append('image',props.payload.image)
                const response = await sendInstagramData(data)
                setApiFetching(false);
                setApiCall(true);
                setMessage(response[1]);
                if(!response[0]) setError(true)
            }
        }
        fetchData();
    }, []);

    return (
        <ModalContainer>
            <ModalCard>
                <ModalHeader>
                    <h2>Sumándote...</h2>
                </ModalHeader>
                <ModalContent>
                    <Wrapper>
                        {apiFetching && (<Spinner />)}
                        {!apiFetching && setApiCall &&
                            <>
                                {error && <>
                                <ErrorMsg>{message}</ErrorMsg>
                                <ButtonContainer>
                                            <PrimaryLinkBtn
                                                location="/instagram"
                                                primaryText='Okas'
                                            /></ButtonContainer>
                                </>
                                }
                                {!error &&
                                    <>
                                        <p>El usuario {message.username} se registró correctamente</p>
                                        <ButtonContainer>
                                            <PrimaryLinkBtn
                                                location="/instagram"
                                                primaryText='¡Buenísimo!'
                                            /></ButtonContainer>
                                    </>
                                }
                            </>
                        }

                    </Wrapper>
                </ModalContent>
            </ModalCard>
        </ModalContainer>
    )
}

export default Modal