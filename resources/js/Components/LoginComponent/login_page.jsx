import default_image from './assets/default_image.png'
import React, { useState } from 'react';
import styles from './pageStyles/login.module.css'

function login_page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // logic
      console.log(`Username: ${username}, Password: ${password}`);
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
          <checkbox className='check-password'></checkbox>
        </div>
        <button type="submit">Iniciar</button>
        <button>Registrarse</button>
        <div className='div_reset'>
          <a className='a_reset_password' href='https://www.google.com'>Olvido contraseña?</a>
        </div>
      </form>

      <br/>
      
    </div>
  );
}

export default login_page;