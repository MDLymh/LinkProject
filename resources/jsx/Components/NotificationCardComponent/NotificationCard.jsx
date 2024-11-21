import './NotificationCard.css'
import { useState } from 'react';
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";


export default function NotificationCard({notification, setNotifications}){

    //Realizar un post
    const handleAdmit = (e) =>{
        setNotifications([]);//refrescar contenido
    }

    //Realizar un post
    const handleReject = (e) =>{
        setNotifications([]);//refrescar contenido
    }

    return (<>
      <div className="card" key={notification.studentId} >
            <div className='card-data' >
                <strong className='card-title'>{"Notificacion: " + notification.created}</strong>
                <p className='card-data'>{notification.content}</p>
           </div>
           <div className='card-buttons'>
           {notification.notificationType == 1 ? 
                (<>
                    <button className='buttonAdmit' onClick={(e)=>{handleAdmit(e)}}> Aceptar </button> 
                    <br></br>
                    <button className='buttonCancel' onClick={(e)=>{handleReject(e)}}> Rechazar </button>
                </>) : null}
           </div>
        </div>
    </>);
}

ReactDOM.render(<NotificationCard/>, document.getElementById('root'));
