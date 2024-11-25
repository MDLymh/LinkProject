import './NotificationsManager.css'
import { useState } from 'react';

export const NotificationManager=()=>{

//Yael: recibir el usuario loggeado.
let user ={
    id: 2,
    isLeader: true,
}

//Yael: recibir las notificaciones.
let [notifications, setNotifications] = useState([
    {
        id: 3,
        content: "Alumno Pepito Carrera Ing. Computacion. \nSolicitar unirse a proyecto.",
        notificationType: 1,
        studentId: 5,
        created: "2024-11-20"
    },
    {
        id: 4,
        content: "Reunion con asesor. Requiere ver la justificacion del proyecto.",
        notificationType: 2,//el tipo me ayuda a definir si renderizo los botones de rechazar o admitir
        studentId: 0,
        created: "2024-11-18"
    }
])

    return (<>
        <div className='notificationsmanagerContainer'>
            <strong>Proximas reuniones</strong>
            <ol className='meetingsList'>
                {notifications.map((item, key)=>
                    {
                        return(<NotificationCard key={item.id} notification={item} setNotifications={setNotifications}/>);
                    })}
            </ol>
        </div>
    </>);
}
