import React, { useState } from 'react';
import "./PasswordReset.css"
import ReactDOM from "react-dom";

export default function PasswordReset(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [type, setType] = useState('password');
    const [typeConfirm, setTypeConfirm] = useState('password');
  
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
            type={type}
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
        <div className="form_group">
          <label>Confirmar contraseña:</label>
          <input
            type={typeConfirm}
            value={confirm}
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
        <button type="submit" onClick={handleSubmit}>Iniciar</button>
        <button className='button_register'>Regresar</button>
        <div className='div_reset'>
        </div>
      </form>
      <br/>
    </div>
            </>);
}

ReactDOM.render(<PasswordReset/>, document.getElementById('root'));