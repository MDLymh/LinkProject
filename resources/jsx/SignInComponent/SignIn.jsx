import React, { useState } from 'react';
import ReactDOM from "react-dom";

export default function SignIn(){

    const initialData = window.__INITIAL_DATA__;
    console.log(initialData);
    const studentDomain = "@educa.udg.mx";
    const assesorDomain = "@educa.udg.mx";

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');

    const handleSubmit = (event) => {
      event.preventDefault();
      if(username == ""){
        //to do
        return;
      }
    };

    const handleToggleChanged = () => {
        if(type == 'password')
            setType('text')
        else
            setType('password')
    };

    return(<>
    <div className="login-container">
      <div className='div_h1_title'>
        <h1> LinkProject </h1>
      </div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="my_username@domainname.udg.mx"
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type={type}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="nueva contraseña"
          />
        </div>
        <div className='div_viewpassword' >
            <label className='label_show_password'>Ver clave</label>
            <label className="switch" onChange={handleToggleChanged}>
                <input type="checkbox"/>
                <span className="slider round"/>
            </label>
        </div>
        <button type="submit">Registrarse</button>
        <button type="submit">Regresar</button>
      </form>
      <br/>
    </div>
    </>);
}

