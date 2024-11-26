import React, { useState } from 'react';
import {PopupWarning} from "../../"
import './SignIn.css'
import ReactDOM from "react-dom";

export const  SignIn =() =>{
  const studentDomain = "@educa.udg.mx";
  const assesorDomain = "@educa.udg.mx";

  const initialData = window.__INITIAL_DATA__;
  let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
  const [name, setName] = useState('');
  const [surname1, setSurname1] = useState('');
  const [surname2, setSurname2] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [type, setType] = useState('password');
  const [typeConfirm, setTypeConfirm] = useState('password');

    let [isErrorPopup, setIsErrorPopup] = useState(window.__INITIAL_DATA__.errors.length>0);
    let [initErrors, setInitErrors] =  useState(window.__INITIAL_DATA__.errors)

  //Realizar un post
  const handleSubmit = (event) => {
    event.preventDefault();
    if(username == ""){
      //to do
      return;
    }

    if(password != confirmpassword){
      return;
    }

    //completar y enviar nuevo registro de usuario
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

let careers = typeof initialData.courses !== 'undefined'?initialData.courses:{};

const laboratories = typeof initialData.laboratories !== 'undefined'?initialData.laboratories:{};
const users_type = typeof initialData.users_type !== 'undefined'?initialData.users_type:{};

//Realizar post
return(<>
  <div className="login-container">
    <div className='div_h1_title'>
      <h1> LinkProject </h1>
    </div>
    <h2>Registrarse</h2>
    <form action='/register' method='post'>
      <div className="form-group">
        <div className='flex'>
            <label>Nombre:</label>
            <input
            type="text"
            value={name}
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder=""/>
            <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
        </div>
        <div className="flex">
            <label>Apellido Paterno:</label>
            <input
            type="text"
            value={surname1}
            name='surname1'//name: apellidos
            onChange={(event) => setSurname1(event.target.value)}
            placeholder=""/>
            <label>Apellido Materno:</label>
            <input
            type="text"
            value={surname2}
            name='surname2'//name: apellidos
            onChange={(event) => setSurname2(event.target.value)}
            placeholder=""/>

        </div>

        <div className='flex'>
            <label>Carrera:</label>
            <select className='select_career' size={1}
            type="text"
            name='carrer'
            required
            onChange={(event) => setCareer(event.target.value)}
            placeholder="">
                <option disabled selected>Selecciona</option>
                {Object.values(careers).map((carrer) => {
                return(<option  value={carrer.id}>{carrer.name}</option>);
                })}
            </select>
            <label>Laboratorio en curso:</label>
            <select className='select_career' size={1}
            type="text"
            name='laboratory'//name: laboratio actual
            onChange={(event) => setLab(event.target.value)}>
                <option disabled selected>Selecciona</option>
                {Object.values(laboratories).map((laboratory)=>(
                    <option value={laboratory.id}>{laboratory.name}</option>
                ))}
            </select>
        </div>
        <label>Correo:</label>
        <input
          type="text"
          value={username}
          name='email'
          onChange={(event) => setUsername(event.target.value)}
          placeholder="my_username@domainname.udg.mx"/>
      </div>
      <div className="form-group flex">
        <label htmlFor="code">Codigo:</label>
        <input type="num" name='code' placeholder='123456789' />
        <label htmlFor="user-type">Tipo de usuario</label>
        <select name="user-type" id="user-type">
            <option selected disabled>selecciona</option>
            {
                Object.values(users_type).map((user_type)=>(
                    <option value={user_type.id}>{user_type.name}</option>
                ))
            }
        </select>
      </div>

      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type={type}
          value={password}
          name='password'
          onChange={(event) => setPassword(event.target.value)}
          placeholder="nueva contraseña" />
      </div>
      <div className='div_viewpassword' >
          <label className='label_show_password'>Ver clave</label>
          <label className="switch" onChange={handleToggleChanged}>
              <input type="checkbox"/>
              <span className="slider round"/>
          </label>
      </div>
      <div className="form-group">
        <label>Confirmar contraseña:</label>
        <input
          type={typeConfirm}
          value={confirmpassword}
          name='password_confirmation'
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="confirmar contraseña"/>
        <div className='div_viewpasswordConfirm' >
          <label className='label_show_password'>Ver clave</label>
          <label className="switch" onChange={handleToggleChangedConfirm}>
              <input type="checkbox"/>
              <span className="slider round"/>
          </label>
      </div>
      </div>
      <button type="submit" onClick={(e) => {SubmitEvent}}>Registrarse</button>
      <button className='buttonCancelCreate' onClick={(e) => {e.preventDefault();
        window.location.href ="login"}}//necesito regresar al Login
        >Iniciar sesion</button>
    </form>
    {isErrorPopup && <PopupWarning errors={initErrors} setIsErrorPopup={setIsErrorPopup}/> }
    <br/>
  </div>
  </>);
}



ReactDOM.render(<SignIn/>, document.getElementById('root'));
