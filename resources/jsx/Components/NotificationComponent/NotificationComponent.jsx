import './NotificationComponent.css';

export default function NotificationComponent({ notifications }){

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

ReactDOM.render(<NotificationComponent/>, document.getElementById('root'));


