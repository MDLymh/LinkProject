import './SidebarUserNav.css'
import { useState } from 'react';
import {NotificationComponent as Notifications,FilterComponent} from "../../";

export const SidebarUserNav =({user, currentView, setCurrentView, notifications, careerFilter, innovationsFilter, labFilter})=>{

    const [filterCareer,setFilterCareer]= useState(null);
    const [filterInnovations,setFilterInnovations]= useState(null);
    const [filterLab,setFilterLab]= useState(null);

    let currentUser = user;

    const handleViewNotifications = (e) =>{
        setCurrentView("Notificaciones");

    }

    const handleViewProfile = (e) =>{
        setCurrentView("Perfil");

    }

    const handleViewTasks = (e) =>{
        setCurrentView("Tareas");
    }

    const handleViewMeetings = (e) =>{
        setCurrentView("Reuniones");
    }

    const handleViewProjects = (e) =>{
        //go to Projects
        setCurrentView("Proyectos");
    }

    const handleViewOwnProject = (e) =>{
        //go to Projects
        setCurrentView("Proyecto");
    }


    return (<>
        <div className="sidebarNavContainer">
            <div className="header">
                <h2 className="userProfileTitle">{currentView}</h2>
            </div>
            <div className="notificationsContainer">
                <label>Notificaciones</label>
                <Notifications notificationsList={notifications}/>
            </div>
            {currentView === "Proyectos" ?
            (<div className="filtersContainer">
                <FilterComponent setFilterCareer={setFilterCareer} setFilterInnovations={setFilterInnovations} setFilterLab={setFilterLab}/>
            </div>) : (<div className=""></div>)}
            <div className="navigationContainer">
                <button className="buttonViewProfile"  onClick={handleViewNotifications}>Ver notificaciones</button>
                <button className="buttonViewProfile"  onClick={handleViewProfile}>Ver perfil</button>
                <button className="buttonViewTasks" onClick={handleViewTasks}>Ver tareas</button>
                <button className="buttonViewTeam" onClick={handleViewMeetings}>Ver reuniones</button>
                {user.id_project == -1 ? (
                    <button className="buttonSearchProjects" onClick={handleViewProjects}>Ver proyectos</button>

                ) : (
                    <button className="buttonSearchProjects" onClick={handleViewOwnProject}>Ver proyecto</button>
                )}
                <button className="buttonViewTeam" onClick={(e)=>{e.preventDefault();window.location.href="/logout"}}>Cerrar Sesion</button>
            </div>
        </div>
        </>);
}
