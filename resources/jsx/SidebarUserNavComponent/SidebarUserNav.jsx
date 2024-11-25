import React from "react";

export const SidebarUserNav=({user, currentView, notifications, setFilterCareer, setFilterInnovations, setFilterLab})=>{

    let currentUser = user;
    let notificationsList = [
        // { message: 'Solicitud a unirse', timestamp: '2023-10-01 10:00 AM' },
        // { message: 'Solicitud a unirse', timestamp: '2023-10-01 09:30 AM' },
        // { message: 'Nueva reunion programada', timestamp: '2023-10-01 09:00 AM' },
        // { message: 'Nueva reunion programada', timestamp: '2023-10-01 08:45 AM' },
        // { message: 'Nueva tarea', timestamp: '2023-10-01 08:00 AM' },
        // { message: 'Nueva reunion programada', timestamp: '2023-10-01 07:30 AM' },
    ];


    const handleViewProfile = () =>{
        setCurrentView("Perfil");

    }

    const handleViewTasks = () =>{
        setCurrentView("Tareas");

    }

    const handleViewMeetings = () =>{
        setCurrentView("Reuniones");

    }

    const handleViewProjects = () =>{
        //go to Projects
        setCurrentView("Perfil");
    }

    const handleViewCreateProject = () =>{
        //popup form to be filled with project data
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
            {currentView == "Proyectos" ?
            (<div className="filtersContainer">
                <FilterComponent setFilterCareer={setFilterCareer} setFilterInnovations={setFilterInnovations} setFilterLab={setFilterLab}/>
                {/* <FilterComponent /> */}
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
            </div>
        </div>
        </>);
}
