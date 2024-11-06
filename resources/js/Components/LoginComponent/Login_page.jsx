import default_image from './assets/default_image.png'
import React, { useState } from 'react';
import styles from './pageStyles/login.module.css'

function Login_page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // logic
      console.log(`Username: ${username}, Password: ${password}`);
    };
    
    const handleToggleChanged = () => {
      if(type == 'password')
          setType('text')
      else
          setType('password')
  };

  return (

    <div className="login-container">
      <div className='div_h1_title'>
        <h1> LinkProject </h1>
      </div>
      <h2>Iniciar Sesión</h2>
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
        <button type="submit">Iniciar</button>
        <button type='submit'>Registrarse</button>
        <div className='div_reset'>
          <a className='a_reset_password' href='https://www.google.com'>Olvido contraseña?</a>
        </div>
      </form>

      <br/>
      
    </div>
  );
}

export default Login_page;