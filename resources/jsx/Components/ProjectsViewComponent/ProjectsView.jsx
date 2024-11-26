import './ProjectsView.css'
import { useState, useEffect } from 'react'
import { CreateProject, ProjectItem } from "../../";

export const ProjectsView = ({ careerFilter, labfilter }) => {
    let user = window.__INITIAL_DATA__.user;
    const [projects, setProjects] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);  // Añadir el estado aquí

    useEffect(() => {
        const getProjects = async () => {
            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try {
                let response = await fetch('/project/getAll', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrf
                    },
                })
                if (!response.ok) {
                    throw new Error('Error de conexion');
                }
                if (response.status == 200) {
                    setProjects(await response.json());
                }
            } catch (error) {
                console.error(error);
            }
        };
        getProjects();
    }, []);

    return (
        <>
            <div className="projectViewerContainer">
                {user.id_project == -1 && user.isStudent ?
                    (<button className="buttonCreateProject" onClick={() => { setIsPopupOpen(true) }}>
                        Crear proyecto
                    </button>) : null}

                {isPopupOpen && (
                    <CreateProject
                        setIsPopupOpen={setIsPopupOpen}  // Pasar la función correctamente
                    />
                )}

                <ul className='filteredProjects'>
                    {projects.map((project) => {
                        if (project.labId == labfilter || labfilter == 0) {
                            return (<ProjectItem project={project} user={user} />)
                        }
                    })}
                </ul>
            </div>
        </>
    );
}
