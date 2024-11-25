import React, { useState, useEffect } from "react";
import "./ViewerComponent.css"
import Sidebar from "../Sidebar/SidebarComponent";
import UserProfile from "../UserProfileViewerComponent/UserProfile";
import MeetingsCalendar from "../CalendarComponent/MeetingsCalendar";
import Notifications from "../NotificationsComponent/Notifications";
import SidebarUserNav from "../SidebarUserNavComponent/SidebarUserNav";
import CreateMeeting from "../CreateMeetingComponent/CreateMeeting";
import ProjectViewer from "../ProjectViewer/ProjectViewer"
import ViewTask from "../ViewTasks/ViewTask";
import ViewerOwnProject from "../ViewerOwnProjectComponent/ViewerOwnProject";

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
    //manejo de errores desde la vista principal
    let [isErrorPopup, setIsErrorPopup] = useState(false)
    let [initErrors, setInitErrors] =  useState([])
    
    //manejar estado de Seleccion de filtros
    let [careerFilter, setFilterCareer] = useState('')
    let [innovationsFilter, setFilterInnovations] = useState([])
    let [labFilter, setFilterLab] = useState([])
    
    //manejar el estado de seleccion del mes para ver reuniones
    let [currentDate, setCurrentDate] = useState(new Date())

    //Yael: recibir notificaciones recientes (un arreglo de 10) cada 1 min haria el fetch
    const [notifications, setNotifications] = useState([])

    // Palma
    const fetchNotifications = async () => {
        const newNotifications = //llamada al backend.
        setNotifications(prev => [...prev, ...newNotifications]);
        newNotifications.forEach(notification => toast(notification.message));
      };

    useEffect(() => {
        fetchNotifications(); // Initial fetch
        const interval = setInterval(fetchNotifications, 60000); // Fetch cada minuto
        return () => clearInterval(interval); 
    }, []);

    
    const renderComponent = () =>{
        if(currentView == "Proyectos")
            return <ProjectViewer />
        else if(currentView == "Perfil")
            return <UserProfile/>
        else if(currentView == "Tareas")
            return <ViewTask/>
        else if(currentView == "Proyecto")
            return <ViewerOwnProject user={user}/>;
        else if(currentView == "Reuniones")
            return <MeetingsViewer user={user}/>;
        else if(currentView == "Notificaciones")
            return <NotificationsManager/>;
        else
            return null;
    }

    return (<>
    <div className="main">
        <div className="appglass">
            <div className="leftmenu">
                <SidebarUserNav user={user} currentView={currentView} setCurrentView={setCurrentView} notifications={notificacions} setFilterCareer={setFilterCareer} setFilterInnovations={setFilterInnovations} setFilterLab={setFilterLab}/>
            </div>
            <div className="mainBoard">
                { renderComponent()}
                {isErrorPopup ? (
                    <PopupWarning errors={initErrors} setIsErrorPopup={setIsErrorPopup(false)}/>) : null}
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

ReactDOM.render(<ProjectsviewerComponent/>, document.getElementById('root'));
