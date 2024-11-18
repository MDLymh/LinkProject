import './ProjectItem.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function ProjectItem({project, user}){
    
    let hasProject = user.id_project != -1 ? true : false;

    let projectKey = project.project_id;
    let projectName = project.project_name;
    let projectData =  project.project_description  + "\n\t" + project.request_knowledge;
    let projectMembers = project.members;
    let labLevel = project.current_lab;

    return (<>
        <div className="card" 
        style={{backgroundColor: project.max_members === project.members ? '#FFAE7E' : ''}}>
            {/* imagen del lider del proyecto */}
            <img className="card-image" src={'https://via.placeholder.com/150'} alt="def picture"></img>
            <div className='card-data' >
                <strong className='card-title'>{projectName}</strong>
                <p className='card-text'>{projectData}</p>
                <label className='labLevel'>{labLevel}</label>
                <strong className='members'>{"Miembros:" + project.members + "/" + project.max_members}</strong>
           </div>
           <div className='membersContainer'>
                {user.id_project === -1 && project.max_members != project.members ? 
                (<button className='buttonJoinProject'>Solicitar Unirse</button>) 
                : null}
            </div>
        </div>
        </>)
}

ReactDOM.render(<ProjectItem/>, document.getElementById('root'));
