import React, { useState } from 'react';
import './SignIn.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../";

export const  SignIn =() =>{
  const studentDomain = "@educa.udg.mx";
  const assesorDomain = "@educa.udg.mx";
  let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
  const [name, setName] = useState('');
  const [surname1, setSurname1] = useState('');
  const [surname2, setSurname2] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [career, setCareer] = useState('');
  const [lab, setLab] = useState('');

  const [type, setType] = useState('password');
  const [typeConfirm, setTypeConfirm] = useState('password');

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

//Yael: aqui cargaria las carreras para que se diera de alta al usuario. Dejo un ejemplod del arreglo
let careers = [
  {
    id: 0,
    career_name: "Seleccionar...",
  },
  {
    id: 1,
    career_name: "Ing. Computacion",
  },
  {
    id: 2,
    career_name: "Ing. Informatica",
  },
]

//Aqui defini los laboratorios
const laboratories = [ "NA", "Laboratorio Abierto 1", "Laboratorio Abierto 2", "Laboratorio Abierto 3"];


  return(<>
  <div className="login-container">
    <div className='div_h1_title'>
      <h1> LinkProject </h1>
    </div>
    <h2>Registrarse</h2>
    <form action='/register' method="post">
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(event) => setName(event.target.value)}
          placeholder=""/>
        <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
        <label>Apellido Paterno:</label>
        <input
          type="text"
          value={surname1}
          name="surname1"
          onChange={(event) => setSurname1(event.target.value)}
          placeholder=""/>
          <label>Apellido Materno:</label>
        <input
          type="text"
          value={surname2}
          name="surname2"
          onChange={(event) => setSurname2(event.target.value)}
          placeholder=""/>
        <label>Carrera:</label>
        <select className='select_career' size={1}
          type="text"
          value={username}
          onChange={(event) => setCareer(event.target.value)}
          name='degree'
          placeholder="">
            {careers.map((item, key) => {
              return(<option key={item.id}>{item.career_name}</option>);
            })}
        </select>
        <label>Laboratorio en curso:</label>
        <select className='select_career' size={1}
          type="text"
          value={lab}
          onChange={(event) => setLab(event.target.value)}
          placeholder="">
            {laboratories.map((item, key) => {
              return(<option key={item}>{item}</option>);
            })}
        </select>
        <label>Usuario:</label>
        <input
          type="text"
          value={username}
          name='email'
          onChange={(event) => setUsername(event.target.value)}
          placeholder="my_username@domainname.udg.mx"/>
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
          placeholder="confirmar contraseña"
        />
        <div className='div_viewpasswordConfirm' >
          <label className='label_show_password'>Ver clave</label>
          <label className="switch" onChange={handleToggleChangedConfirm}>
              <input type="checkbox"/>
              <span className="slider round"/>
          </label>
      </div>
      </div>
      <button type="submit" onClick={(e) => {SubmitEvent}}>Registrarse</button>
      <button type="submit" onClick={() => {console.log("Cancelado")}}>Regresar</button>
    </form>
    <br/>
  </div>
  </>);
}



ReactDOM.render(<SignIn/>, document.getElementById('root'));
