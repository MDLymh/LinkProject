import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./ViewerComponent.css"
import {CreateMeeting,ViewerOwnProject,ProjectsView,TasksViewer,SidebarUserNav,MeetingsCalendar,UserProfile} from "../../";

export const ProjectsviewerComponent =() => {

    const user = typeof window.__INITIAL_DATA__.user!=='undefined'?window.__INITIAL_DATA__.user:{};
    //La uso como bandera para indicar en cual vista se encuentra, y renderizar componentes.
    //banderas: Perfil, Tareas, Proyectos, Editar Perfil, Reuniones
    let [currentView, setCurrentView] = useState("Perfil");

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
        const newNotifications = await fetch('/notifiactions/get',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                isLeader: user.isLeader,
                userId: user.id,
                project: user.id_project,
            })
        })
        .then(response => response.JSON)
        .catch(error => console.error('Error:', error));
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
            return <ProjectsView/>;
        else if(currentView == "Perfil")
            return <UserProfile/>
        else if(currentView == "Tareas")
            return <TasksViewer/>;
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
                <SidebarUserNav user={user} currentView={currentView} setCurrentView={setCurrentView} notifications={notifications} setFilterCareer={setFilterCareer} setFilterInnovations={setFilterInnovations} setFilterLab={setFilterLab}/>
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

ReactDOM.render(<ProjectsviewerComponent/>, document.getElementById('root'));
