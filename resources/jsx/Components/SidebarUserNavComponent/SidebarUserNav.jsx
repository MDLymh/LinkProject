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
                <FilterComponent setFilterCareer={setFilterCareer} setFilterInnovations={setFilterInnovations} setFilterLab={setFilterLab}/>
                {/* <FilterComponent /> */}
            </div>) : (<div className=""></div>)}
            <div className="navigationContainer">
                <button className="buttonViewProfile"  onClick={() => {setCurrentView("Perfil")}}>Ver perfil</button>
                <button className="buttonViewTasks" onClick={() => {setCurrentView("Tareas")}}>Ver tareas</button>
                <button className="buttonViewTeam" onClick={() => {setCurrentView("Reuniones")}}>Ver reuniones</button>
                {user.id_project == -1 ? (
                                <button className="buttonSearchProjects" onClick={() =>{setCurrentView("Proyectos")}}>Ver proyectos</button>
    
                ) : (
                    <button className="buttonSearchProjects" onClick={() =>{setCurrentView("Proyecto")}}>Ver proyecto</button>
                )}
                {user.id_project == -1 && user.isStudent ? (<button className="buttonCreateProject" onClick={handleViewCreateProject}>Crear proyecto</button>) : null}
            </div>
        </div>
        </>);
}

ReactDOM.render(<SidebarUserNav/>, document.getElementById('root'));
