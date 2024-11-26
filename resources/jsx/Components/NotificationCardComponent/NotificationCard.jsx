import './NotificationCard.css'


export const NotificationCard=({notification, setNotifications})=>{
    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
    //Realizar un post
    const handleAdmit = (e) =>{
        console.log(e.value);
        return;
        setNotifications([]);//refrescar contenido
    }

    //Realizar un post
    const handleReject = (e) =>{
        setNotifications([]);//refrescar contenido
    }


    return (<>
        <form action='/notifiactions/update' method='post'>
        <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
        <input type="hidden" name="notificationId" value={notification.id} autocomplete="off"></input>
          <div className="card" key={notification.studentId} >
              <div className='card-data' >
                  <strong className='card-title'>{"Notificacion: " + notification.created}</strong>
                  <p className='card-data'>{notification.content}</p>
             </div>

             <div className='card-buttons'>
             {notification.notificationType == 1 ?
                  (<>
                      <button className='buttonAdmit'
                              name='admited'> Aceptar </button>
                      <br></br>
                      <button className='buttonCancel'
                              name='rejected'> Rechazar </button>
                  </>) : null}
             </div>
          </div>
        </form>
      </>);
}
