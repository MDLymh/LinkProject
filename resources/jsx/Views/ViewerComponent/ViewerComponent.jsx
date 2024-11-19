import React, { useState, useEffect } from "react";
import "./ViewerComponent.css"
import Sidebar from "../Sidebar/SidebarComponent";
import UserProfile from "../UserProfileViewerComponent/UserProfile";
import MeetingsCalendar from "../CalendarComponent/MeetingsCalendar";
import Notifications from "../NotificationsComponent/Notifications";
import SidebarUserNav from "../SidebarUserNavComponent/SidebarUserNav";

import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function ProjectsviewerComponent () {
    
    //La uso como bandera para indicar en cual vista se encuentra, y renderizar componentes.
    //banderas: Perfil, Tareas, Proyectos, Editar Perfil, Reuniones
    let [currentView, setCurrentView] = useState("Perfil");

    //Yael: recibir el usuario loggeado
    const user = {
        id: 1,
        userName: "Pepito",
        isStudent: false,
        isLeader: false,
        id_project: -1
    }


    //manejar estado de Seleccion de filtros
    let [careerFilter, setFilterCareer] = useState('')
    let [innovationsFilter, setFilterInnovations] = useState([])
    let [labFilter, setFilterLab] = useState([])
    
    //manejar el estado de seleccion del mes para ver reuniones
    let [currentDate, setCurrentDate] = useState(new Date())

    //Yael: recibir notificaciones recientes (un arreglo de 10) cada 1 min haria el fetch
    const [notifications, setNotifications] = useState([])

    const fetchNotifications = async () => {
        // Simulate fetching notifications from an API
        const newNotifications = //llamada al backend.
        setNotifications(prev => [...prev, ...newNotifications]);
        newNotifications.forEach(notification => toast(notification.message));
      };

    useEffect(() => {
        fetchNotifications(); // Initial fetch
        const interval = setInterval(fetchNotifications, 60000); // Fetch every minute
        return () => clearInterval(interval); 
    }, []);

    const renderComponent = () => {
        if(currentView == "Proyectos")
            return <ProjectViewer />
        else if(currentView == "Perfil")
            return <UserProfile/>
        else if(currentView == "Tareas")
            return <ViewTask/>
        else
            return null;
    }

    return (<>
    <div className="main">
        <div className="appglass">
            <div className="leftmenu">
                <SidebarUserNav user={user} currentView={currentView} careerFilter={careerFilter} notifications={notificacions} labFilter={labFilter}/>
            </div>
            <div className="mainBoard">
                { renderComponent()}
            </div>
            <div className="rightmenu">
                <label>Proximas reuniones</label>
                <MeetingsCalendar currentDate={currentDate}/>
                {!user.isStudent ?
                    (<div className="programMeeting">
                        <CreateMeeting/>
                    </div>) : null}
            </div>
        </div>
    </div>
    </>);
}

ReactDOM.render(<ProjectsviewerComponent/>, document.getElementById('root'));
