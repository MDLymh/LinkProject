import './ProjectsView.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function ProjectsView({careerFilter, innovationsFilter, labfilter}){

    //Yael: recibir usuario logeado
    let user = {
        id: 1,
        userName: "Pepito",
        isStudent: true,
        isLeader: false,
        id_project: -1,
    }

    //Yael: recibir los proyectos que esten en el criterio de los filtros, sino hay ninguno entonces tomar todos.
    //careerFilter: admite un valor
    //innovationsFilter: admite mas de un valor
    //labFilter: admite un valor
    let projects = [
        {
            project_id: 1,
            project_name: "proyecto 1",
            project_description: "Este es un ejemplo de un proyecto",
            current_lab: "Lab 1",//laboratorio del lider
            innovation_type: 1,
            request_knowledge: "Se requieren miembros con carreras afines a: Ing. Computacion, Ing. Software",
            members: 2,
            max_members: 4
        },
        {
            project_id: 2,
            project_name: "proyecto 2",
            project_description: "Este es un ejemplo de un proyecto",
            current_lab: "Lab 1",//laboratorio del lider
            innovation_type: 1,
            request_knowledge: "Se requieren miembros con carreras afines a: Ing. Computacion, Ing. Software",
            members: 4,
            max_members: 4
        },
    ]

    return (<>
    <div className="projectViewerContainer">
        <ul className='filteredProjects'>
            {projects.map((item, key)=>{
                return(<ProjectItem key={key} project={item} user={user}/>)
            })}
        </ul>
    </div>
    </>)
}

ReactDOM.render(<ProjectsView/>, document.getElementById('root'));