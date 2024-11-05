import React, { useState } from 'react';

function signin_page(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // logic
      console.log(`Username: ${username}, Password: ${password}`);
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
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="nueva contraseña"
          />
          <checkbox className='check-password'></checkbox>
        </div>
        <div className='div_viewpassword' >
        <label className="switch">
            <input type="checkbox"/>
            <span class="slider round"/>
        </label>
        </div>
        <button type="submit">Registrarse</button>
        <button type="submit">Regresar</button>
        
      </form>

      <br/>
      
    </div>
    </>);
}

export default signin_page;