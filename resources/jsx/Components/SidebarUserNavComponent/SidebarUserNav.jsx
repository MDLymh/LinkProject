import './SidebarUserNav.css'
import Notifications from '../NotificationsComponent/NotificationComponent'
import FilterComponent from "../FilterComponent/FilterComponent";
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";


export default function SidebarUserNav({user, current, notifications}){

    let notificationsList = [];

    if(notifications == null)
        notificationsList = [];
    else
        notificationsList = notifications;

    let currentUser = user;
    let currentView = current;

    return (<>
    <div className="sidebarNavContainer">
        <div className="header">
            <h2 className="userProfileTitle">{currentView}</h2>
        </div>
        <div className="notificationsContainer">
            <Notifications notificationsList={notificationsList}/>
        </div>
        {currentView == "Proyectos" ?
        (<div className="filtersContainer">
            <FilterComponent />
        </div>) : null}
        <div className="projectsContainer">
            <button className="buttonViewTasks">Ver tareas</button>
            <button className="buttonViewTeam">Ver reuniones</button>
            <button className="buttonSearchProjects">Ver proyectos</button>
            <button className="buttonCreateProject">Crear proyecto</button>
        </div>
    </div>
    </>)
}

ReactDOM.render(<SidebarUserNav/>, document.getElementById('root'));
