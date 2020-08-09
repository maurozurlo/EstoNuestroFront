import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../components/atoms/Card'
import PrimaryButton from '../components/atoms/PrimaryButton'
import InstaRegister from '../components/modal/Insta-Register'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  padding: 0 10px;
  margin-bottom: 24px;
  h3{
      text-align: left;
  }
  h4{
      color: var(--text-dark);
      margin: 10px 0 6px;
  }

  p{
      padding: 0;
      font-size: .9em;
  }

  button{
      margin-top: 16px;
      width: 100%;
  }
`

const Input = styled.input`
border: 1px solid var(--button-outline-hover);
background: var(--gradient-bottom);
color: var(--text-dark);
min-height: 40px;
border-radius: var(--border-radius);
margin-bottom: 10px;
padding-left: 10px;
font-size: 14px;
width: 100%; 
`

const ErrorMsg = styled.p`
    color: var(--error-message) !important;
    font-size: 12px  !important;
    font-weight: bold;
    margin: 0;
    padding: 0px 5px;
    padding-bottom: 10px;
    text-align: center;
`

const ImagePlaceholder = styled.div`
    display: block;
    margin: 16px auto;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: var(--gradient-bottom);
    border: 2px solid var(--button-outline-hover);
    label{
        display:block;
        opacity: 0;
        width: 100%;
        height: 100%;
    }
    input{
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
`

const CheckBoxContainer = styled.div`
margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Register = (props) => {
    const [payload, setPayload] = useState({
        username: "",
        image: null,
        category: []
    })

    const [modal, setModal] = useState(false)
    
    const [error, setError] = useState('')

    const checkUsernameLength = () => {
        if (!payload.username || payload.username.length < 3) {
            setError('El nombre de usuario debe tener mínimo 3 letras.');
            return false;
        }
        return true;
    }

    //Input
    const handleUserInput = (e) => {
        const _user = e.target.value.replace(/[^a-zA-Z0-9-_.%]/g, "")
        setPayload({...payload,username:_user})
        
    }

    const handleFileInput = (e) =>{
        const file = e.target.files[0];
        console.log(file)
        setPayload({...payload,image:file})
    }

    const handleCategoryInput = (e) =>{
        const cat = e.target.id;
        const i = selectedCategories.indexOf(cat);
        if(i === -1){
            selectedCategories.push(cat);
        }else{
            selectedCategories.splice(i, 1);
        }
        setPayload({...payload,category:selectedCategories})
    }

    const displayModal = () =>{
        if(checkUsernameLength()){
            setModal(true)
        }
    }

    const categories = ['Música','Arte','Poesía','Otro'];
    const selectedCategories = []

    return (    
        <Wrapper>
            {modal && <InstaRegister payload={payload}/>}
            <Card content={<>
                <h3>Sumarte a la lista</h3>
                <p>Al sumarte, vas a aparecer en la lista durante dos semanas desde tu inscripción.<br></br>
                Finalizado ese plazo podés volver a anotarte todas las veces que quieras.</p>
                <h4>Tu usuario de instagram, sin @</h4>
                <Input
                    type="text"
                    value={payload.username}
                    placeholder="Tu usuario de Instagram..."
                    onChange={handleUserInput}
                    maxLength="30"
                    autoFocus />
                <ErrorMsg>{error}</ErrorMsg>
                <h4>Una fotito</h4>
                <p>"Te seguimos!" siempre va a sugerirte un perfil destacado aleatorio.<br></br>
                    Podés elegir la foto que querés que aparezca cuando salga el tuyo apretando acá:</p>
                <ImagePlaceholder>
                    <label htmlFor="file"></label>
                    <input type="file" id="file" onChange={handleFileInput}></input>
                </ImagePlaceholder>
                <h4>Categorías</h4>
                <p>Elegí las que más representan tu perfil:</p>
                <CheckBoxContainer>
                {categories.map((element,i) => {
                    return (
                        <label key={element} className="checkcontainer" onChange={handleCategoryInput} >{element}
                        <input type="checkbox" id={i}></input>
                        <span className="checkmark"></span>
                      </label>
                    )
                })}
                </CheckBoxContainer>
                <PrimaryButton
                primaryText="Sumarme" 
                action={displayModal}
                />
            </>} />
        </Wrapper>
    )

}


export default Register