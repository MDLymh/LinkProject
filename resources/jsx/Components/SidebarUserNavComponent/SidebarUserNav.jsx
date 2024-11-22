import './SidebarUserNav.css'
import Notifications from '../NotificationsComponent/NotificationComponent'
import FilterComponent from "../FilterComponent/FilterComponent";
import ReactDOM from "react-dom";


export default function SidebarUserNav({user, currentView, setCurrentView, notifications, careerFilter, innovationsFilter, labFilter}){

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
        setCurrentView("Proyectos");
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

ReactDOM.render(<SidebarUserNav/>, document.getElementById('root'));
