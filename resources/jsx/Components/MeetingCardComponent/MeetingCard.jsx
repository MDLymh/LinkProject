import './MeetingCard.css';
import { useState } from 'react';
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function MeetingCard({meeting, setMeetings}){

    //Yael: si el usuario no es estudiante, si renderiza el boton.
    let user ={
        id:1,
        isStudent: false,
    }

    //Realizar un post
    const handleCancelMeeting =(e) => {
        //Yael: aqui la llamada seria para un delete
        console.log(e.target.value);
        //refrescar contenido al padre
        setMeetings(e.target.value);//id de la tabla meetings
    }

    return (<>
    <div className="card">
            <div className='card-data' >
                <strong className='card-title'>{"Fecha programada:  " + meeting.scheduled}</strong>
                <strong className='meeting-data'>-Informacion:</strong>
                <p className='card-data'>{meeting.description}</p>
           </div>
           <div>
            {user.isStudent ? (null) : 
            (
                <button className='buttonCancel' onClick={handleCancelMeeting}>Cancelar</button>
            )}
           </div>
        </div>
    </>);
}

ReactDOM.render(<MeetingCard/>, document.getElementById('root'));
