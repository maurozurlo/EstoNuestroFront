import styled from 'styled-components'
import React, {useState} from 'react'
//Assets
import close from '../icons/close.svg'
//Components
//Modal content
import SignUp from './modal/SignUp'
import Confirmation1 from './modal/Confirmation-1'
import Confirmation2 from './modal/Confirmation-2'

const ModalContainer = styled.div`
  z-index: 999;
  background: rgba(0, 0, 0, 0.65);
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
  background: white;
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

const Modal = (props) => {
  const [content, setContent] = useState([props.title, props.content]);
  const setModalContent = (title, val) => setContent(title, val);

  const RenderContent = () =>{
    const i = parseInt(content[1]);
    if(i === 0)
    return (<SignUp close={props.close} action={setModalContent}/>);
    if(i === 1)
    return (<Confirmation1 close={props.close} action={setModalContent}/>);
    if(i === 2)
    return (<Confirmation2 close={props.close}/>);
    return null;
  }


  return (
    <ModalContainer>
      <ModalCard>
        <ModalHeader>
          <h2>{content[0]}</h2>
          <img src={close} alt="" onClick={props.close} />
        </ModalHeader>
        <ModalContent>
          {<RenderContent />}
        </ModalContent>
      </ModalCard>
    </ModalContainer>
  )
}

export default Modal