import React from 'react'
import './NotificationComponent.css';

function NotificationComponent({ notifications }){

    return (<>
        <div className="notificationContainer">

            <label className='notificationTitle'>Notificaciones</label>
            <ol className="notificationList">
                {notifications.map((notification, index) => (
                    <li key={index} className="notificationItem">
                        <span className="notificationMessage">{notification.message}</span>
                        <span className="notificationTimestamp">{notification.timestamp}</span>
                    </li>
                ))}
            </ol>
        </div>
    </>)
}

export default NotificationComponent

