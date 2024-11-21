import './ViewerOwnProject.css'
import StudentCard from '../StudentCardComponent/StudentCard';

export default function ViewerOwnProject ({user}){

    //Yael: aqui necesito la informacion del proyecto al que pertenece el usuario.
    let projectInfo = {
        id_project: 1,
        project_name: "Proyecto 1",
        description: "Creacion de un sistema embebido. Se requieren conocimientos en C++, MySQL",
        members:[
            {
                id: 1,
                student_name: "Juan Rizos",
                career: "Ing. Computacion",
                lab: "Laboratorio 1",
                picture: 'https://via.placeholder.com/150'
            }
        ],
        assesor: "Mtro. Ulises Bonifacio",
        innovation: "Incremental"
    };
    
    //Realizar un post
    const handleAbandonClick = () => {
        //Yael: aqui se desliga el usuario alumno del proyecto al que este
    }

    return(<>
        <div className="ownprojectContainer">
            <strong className='title'>Detalles del Proyecto</strong>
            <button className='buttonExitProject' onClick={handleAbandonClick}>Abandonar Proyecto</button>
            <div className="contentContainer">
              <label className="titleInfo"> Nombre de proyecto:
                    </label>
                    <p className="contentInfo">{projectInfo.project_name}</p>
                    
                <label className="titleInfo"> Asesor:
                    </label>
                    <p className="contentInfo">{projectInfo.assesor}</p>
    
                <label className="titleInfo"> Innovacion:
                    </label>
                    <p className="contentInfo">{projectInfo.innovation}</p>
                
                <label className="membersInfo"> Miembros:</label>
               <div className='membersContainer'>
                    <li className='membersList'>
                        {projectInfo.members.map((item, index)=>{
                            return <StudentCard key={item.id} student={item}/>
                        })}
                    </li>
               </div>
            </div>
        </div>
        </>);
}