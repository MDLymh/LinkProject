import React, { useState } from 'react';
import "./PasswordReset.css"
import ReactDOM from "react-dom";
import { PopupWarning } from '../../Components/WarningComponent/PopupWarning';

export const PasswordReset =() =>{

    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [type, setType] = useState('password');
    const [typeConfirm, setTypeConfirm] = useState('password');
    let [isErrorPopup, setIsErrorPopup] = useState(window.__INITIAL_DATA__.errors.length>0);
    let [initErrors, setInitErrors] =  useState(window.__INITIAL_DATA__.errors)
    let [isMessagePopup, setIsMessagePopup] = useState(window.__INITIAL_DATA__.message.length>0);
    let [initMessages, setInitMessages] =  useState(window.__INITIAL_DATA__.message)
    const initialData = window.__INITIAL_DATA__;

    const handleSubmit = (event) => {

      event.preventDefault();
      // logic
      console.log(`Username: ${username}, Password: ${password}`);
      if(password == confirm)
      {
        //reset request
      }
    };

    const handleToggleChanged = () => {
      if(type == 'password')
        setType('text')
      else
        setType('password')
    };

    const handleToggleChangedConfirm = () => {
      if(typeConfirm == 'password')
        setTypeConfirm('text')
      else
        setTypeConfirm('password')
    };


    const handleRegister = () =>{

    };

    const handleResetPassword = () =>{

    };



    return(<>
      <div className="login_container">
          <div className='div_h1_title'>
            <h1> LinkProject </h1>
          </div>
          <h2>Reiniciar contraseña</h2>
          <form action="/password/reset" method="post">
            <input type="hidden" name="token" value={initialData.token} autocomplete="off"/>
            <input type="hidden" name="email" value={initialData.email} autocomplete="off"/>
            <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
            <div className="form_group">
              <label>Contraseña:</label>
              <input
                type={type}
                value={password}
                name='password'//name: clave nueva
                onChange={(event) => setPassword(event.target.value)}
                placeholder="ingrese contraseña"
              />
            </div>
            <div className='div_viewpassword' >
                <label className='label_show_password'>Ver clave</label>
                <label className="switch" onChange={handleToggleChanged}>
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
            <div className="form_group">
              <label>Confirmar contraseña:</label>
              <input
                type={typeConfirm}
                value={confirm}
                name='password_confirmation'//name: confirmacion de clave
                onChange={(event) => setConfirm(event.target.value)}
                placeholder="confirmar contraseña"
              />
            </div>
            <div className='div_viewpassword' >
                <label className='label_show_password'>Ver clave</label>
                <label className="switch" onChange={handleToggleChangedConfirm}>
                    <input type="checkbox"/>
                    <span className="slider round"/>
                </label>
            </div>
              <button type="submit" >Iniciar</button>
              <button className='button_register'>Regresar</button>
          </form>
          {isErrorPopup && <PopupWarning errors={initErrors} setIsErrorPopup={setIsErrorPopup}/> }
            {isMessagePopup && <PopupWarning errors={initMessages} setIsErrorPopup={setInitMessages}/> }
          <br/>
        </div>
      </>);
}

ReactDOM.render(<PasswordReset/>, document.getElementById('root'));

