import React from "react"
import Notifications from '../Components/NotificationComponent/NotificationComponent'

export default function SidebarUserNav(){

    const notificationsList = [
        { message: 'Solicitud a unirse', timestamp: '2023-10-01 10:00 AM' },
        { message: 'Solicitud a unirse', timestamp: '2023-10-01 09:30 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 09:00 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 08:45 AM' },
        { message: 'Nueva tarea', timestamp: '2023-10-01 08:00 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 07:30 AM' },
    ];
    
    return (<>
    <div className="sidebarNavContainer">
        <div className="header">
            <h2 className="userProfileTitle">Perfil de usuario</h2>
        </div>
        <div className="notificationsContainer">
            <Notifications notificationsList={notificationsList}/>
        </div>
        <div className="projectsContainer">
            <button className="buttonViewTasks">Ver tareas</button>
            <button className="buttonViewTeam">Ver equipo</button>
            <button className="buttonSearchProjects">Ver proyectos</button>
        </div>
    </div>
    </>)
}
