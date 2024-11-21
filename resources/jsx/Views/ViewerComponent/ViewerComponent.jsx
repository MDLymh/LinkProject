import React, { useState, useEffect } from "react";
import "./ViewerComponent.css"
import UserProfile from "../../Components/UserProfileComponent/UserProfile";
import MeetingsCalendar from "../../Components/CalendarComponent/MeetingsCalendar";
import SidebarUserNav from "../../Components/SidebarUserNavComponent/SidebarUserNav";
import CreateMeeting from "../../Components/CreateMeetingComponent/CreateMeeting";
import ProjectViewer from "../../Components/ProjectsViewComponent/ProjectsView";
//import ViewTask from "../../Components/ViewTasks/ViewTask";
import ViewerOwnProject from "../../Components/ViewerOwnProjectComponent/ViewerOwnProject";

import ReactDOM from "react-dom";
import { Csrf } from "../../";

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


    const renderComponent = () =>{
        if(currentView == "Proyectos")
            return <ProjectViewer />
        else if(currentView == "Perfil")
            return <UserProfile/>
        else if(currentView == "Tareas")
            return;//<ViewTask/>
        else if(currentView == "Proyecto")
            return <ViewerOwnProject user={user}/>;
        else
            return null;
    }

    return (<>
    <div className="main">
        <div className="appglass">
            <div className="leftmenu">
                <SidebarUserNav user={user} currentView={currentView} notifications={notificacions} careerFilter={careerFilter} innovationsFilter={innovationsFilter} labFilter={labFilter}/>
                {/* <SidebarUserNav user={user} currentView={currentView} notifications={notificacions} /> */}
            </div>
            <div className="mainBoard">
                { renderComponent()}
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

