import React, { useState } from 'react';
import './SignIn.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function SignIn(){
  const studentDomain = "@educa.udg.mx";
  const assesorDomain = "@educa.udg.mx";

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [career, setCareer] = useState('');
  const [lab, setLab] = useState('');

  const [type, setType] = useState('password');
  const [typeConfirm, setTypeConfirm] = useState('password');

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

//Realizar post
return(<>
  <div className="login-container">
    <div className='div_h1_title'>
      <h1> LinkProject </h1>
    </div>
    <h2>Registrarse</h2>
    <form action='/signin' method='post'>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          name='firstName'//name: nombre(s) de la persona 
          onChange={(event) => setName(event.target.value)}
          placeholder=""/>
        <label>Apellido:</label>
        <input
          type="text"
          value={surname}
          name='surname'//name: apellidos
          onChange={(event) => setSurname(event.target.value)}
          placeholder=""/>
        <label>Carrera:</label>
        <select className='select_career' size={1}
          type="text"
          value={career}
          name='careerId'//name: Id de carrera
          onChange={(event) => setCareer(event.target.value)}
          placeholder="">
            {careers.map((item, key) => { 
              return(<option key={item.id} value={item.id}>{item.career_name}</option>);
            })}
        </select>
        <label>Laboratorio en curso:</label>
        <select className='select_career' size={1}
          type="text"
          value={lab}
          name='labName'//name: laboratio actual
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
          name='userName'//name: valor del correo institucional
          onChange={(event) => setUsername(event.target.value)}
          placeholder="my_username@domainname.udg.mx"/>
      </div>
      <div className="form-group">
        <label>Contraseña:</label>
        <input
          type={type}
          value={password}
          name='password'//name: clave de cuenta
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
          name='passwordConfirm'//name: confirmacion de clave
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
      <button className='buttonCancelCreate' onClick={() => {
        console.log("Cancelado")}}//necesito regresar al Login
        >Regresar</button>
    </form>
    <br/>
  </div>
  </>);
}

ReactDOM.render(<SignIn/>, document.getElementById('root'));