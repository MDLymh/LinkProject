import './NotificationsManager.css'
import { useEffect, useState } from 'react';
import { NotificationCard } from '../../';

export const NotificationManager=()=>{

    //Yael: recibir las notificaciones.
    let [notifications, setNotifications] = useState([])
    const user = window.__INITIAL_DATA__.user;
    useEffect(()=>{
        const fetchNotifications = async () => {

            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try{
                let response = await fetch('/notifiactions/get',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrf
                    },
                    body: JSON.stringify({
                        isLeader: user.isLeader,
                        userId: user.id,
                        project: user.id_project,
                    })
                })

                if(!response.ok){
                    throw new Error('Error de conexion');
                }
                if(response.status ==200){
                    setNotifications(await response.json());
                }
            }catch(error){
                console.error(error);
            }
          };
        fetchNotifications();
    },[]);



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
