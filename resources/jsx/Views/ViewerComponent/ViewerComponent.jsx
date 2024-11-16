import React from "react";
import "./ViewerComponent.css"
import Sidebar from "../Sidebar/SidebarComponent";
import UserProfile from "../UserProfileViewerComponent/UserProfile";
import MeetingsCalendar from "../CalendarComponent/MeetingsCalendar";

import Notifications from "../NotificationsComponent/Notifications";
import SidebarUserNav from "../SidebarUserNavComponent/SidebarUserNav";

export default function ProjectsviewerComponent () {
    
    //recibir el usuario loggeado
    const user = {
        user_name: "Pepito",
        isStudent: false,
        isLeader: false,
        id_project: -1
    }
    //recibir notificaciones recientes (un arreglo de 20?)
    let notificacions = [
        { message: 'Solicitud a unirse', timestamp: '2023-10-01 10:00 AM' },
        { message: 'Solicitud a unirse', timestamp: '2023-10-01 09:30 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 09:00 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 08:45 AM' },
        { message: 'Nueva tarea', timestamp: '2023-10-01 08:00 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 07:30 AM' },
    ];

    return (<>
    <div className="main">
        <div className="appglass">
            <div className="leftmenu">
                <SidebarUserNav user={user} current={"Proyectos"} notifications={notificacions}/>
            </div>
            <div className="mainBoard">
                <UserProfile/>
            </div>
            <div className="rightmenu">
                <label>Proximas reuniones</label>
                <MeetingsCalendar/>
                {!user.isStudent ?
                    (<div className="programMeeting">
                        <CreateMeeting/>
                    </div>) : null}
            </div>
        </div>
    </div>
    </>);
}

ReactDOM.render(<ViewerComponent/>, document.getElementById('root'));
