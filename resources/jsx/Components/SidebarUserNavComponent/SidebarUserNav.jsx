import './SidebarUserNav.css'
import Notifications from '../NotificationsComponent/NotificationComponent'
import FilterComponent from "../FilterComponent/FilterComponent";
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";


export default function SidebarUserNav({user, currentView, notifications, careerFilter, innovationsFilter, labFilter}){

    let currentUser = user;
    let currentView = current;

    const handleViewProfile = () =>{
        currentView = "Perfil";

    }

    const handleViewTasks = () =>{
        currentView = "Tareas";

    }
    
    const handleViewMeetings = () =>{
        currentView = "Reuniones";

    }

    const handleViewProjects = () =>{
        //go to Projects
        currentView = "Proyectos";
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
            <Notifications notificationsList={notificationsList}/>
        </div>
        {currentView == "Proyectos" ?
        (<div className="filtersContainer">
            <FilterComponent careerFilter={careerFilter} innovationsFilter={innovationsFilter} labFilter={labFilter} />
        </div>) : (<div className="filtersContainer"></div>)}
        <div className="navigationContainer">
            <button className="buttonViewProfile" onClick={handleViewProfile}>Ver perfil</button>
            <button className="buttonViewTasks" onClick={handleViewTasks}>Ver tareas</button>
            <button className="buttonViewMeetings" onClick={handleViewMeetings}>Ver reuniones</button>
            <button className="buttonSearchProjects" onClick={handleViewProjects}>Ver proyectos</button>
            {user.id_project == -1 ? (<button className="buttonCreateProject" onClick={handleViewCreateProject}>Crear proyecto</button>) : null}
        </div>
    </div>
    </>);
}

ReactDOM.render(<SidebarUserNav/>, document.getElementById('root'));
