import "./Login.css"
import ReactDOM from "react-dom";
import React, { useState } from "react";


export const Login  = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');

    const handleRegister = (event) => {
        event.preventDefault();
        window.location.href = "/register";
    }

    const handleResetPassword = (event) =>{

    }

    const handleToggleChanged = () => {
      if(type == 'password')
          setType('text')
      else
          setType('password')
    };
    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');

  return (
    <div className="login_container">
      <div className='div_h1_title'>
        <h1> LinkProject </h1>
      </div>
      <h2>Iniciar Sesión</h2>
      <form action="/login" method="POST">
        <div className="form_group">
          <label>Correo:</label>
          <input
            type="text"
            value={username}
            name="email"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="my_username@domainname.udg.mx"
          />
        </div>
        <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
        <div className="form_group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            name="password"
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
        <button type="submit" >Iniciar</button>
        <button className='button_register' onClick={handleRegister}>Registrarse</button>
        <div className='div_reset'>
          <a className='a_reset_password' href="/password/reset">Olvido contraseña?</a>
        </div>
      </form>
      <br/>
    </div>
  );
}


ReactDOM.render(<Login/>, document.getElementById('root'));
