import './NotificationComponent.css';
import React,{useState, useTransition} from 'react';

export const NotificationComponent =({})=>{

    const [notifications, setNotifications] = useState([]);
    const [isPending, startTransition] = useTransition();//tablero se actualiza en segundo plano

    if(notifications.length== 0){
        return null;
    }
    return (<>
        <div className="notificationContainer">

            <label className='notificationTitle'>Recientes</label>
            <ol className="notificationList">
                {notifications.map((notification, index) => (
                    <li key={index} className="notificationItem">
                        <span className="notificationMessage">{notification.message}</span>
                        <span className="notificationTimestamp">{notification.timestamp}</span>
                    </li>
                ))}
            </ol>
        </div>
    </>);
}
