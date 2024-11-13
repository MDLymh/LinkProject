import React from "react";
import React, { useState } from 'react';
import "./Login.css"
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // validate user credentials
      console.log(`Username: ${username}, Password: ${password}`);
    };

    const handleRegister = (event) =>{
      //call to sign in
    }

    const handleResetPassword = (event) =>{

    }
    
    const handleToggleChanged = () => {
      if(type == 'password')
          setType('text')
      else
          setType('password')
  };

  return (
    <div className="login_container">
      <div className='div_h1_title'>
        <h1> LinkProject </h1>
      </div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="my_username@domainname.udg.mx"
          />
        </div>
        <div className="form_group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
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
        <button type="submit" onClick={handleSubmit}>Iniciar</button>
        <button className='button_register'>Registrarse</button>
        <div className='div_reset'>
          <a className='a_reset_password' onClick={handleResetPassword}>Olvido contraseña?</a>
        </div>
      </form>
      <br/>
    </div>
  );
}

ReactDOM.render(<Login/>, document.getElementById('root'));