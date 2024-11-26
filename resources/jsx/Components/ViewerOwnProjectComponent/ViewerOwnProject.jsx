import './ViewerOwnProject.css'
import { StudentCard } from '../../';
import { useEffect, useState } from 'react';

export const ViewerOwnProject  =({user})=>{
    const [projectInfo,setProjectInfo] = useState([]);

    useEffect(()=>{
        const getProject = async () => {

            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try{
                let response = await fetch('/project/getInfo',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrf
                    },
                    body: JSON.stringify({
                        isLeader: user.isLeader,
                        userId: user.id,
                        project: user.id_project,
                    })
                })

                if(!response.ok){
                    throw new Error('Error de conexion');
                }
                if(response.status ==200){
                    setProjectInfo( await response.json());
                }
            }catch(error){
                console.error(error);
            }
        };
        getProject();
    },[]);


    //Realizar un post
    const handleAbandonClick = () => {
        //Yael: aqui se desliga el usuario alumno del proyecto al que este
    }
    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
    return(<>
            {projectInfo.length !== 0 &&<form action='/project/leave' method='post'>
                <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
                <div className="ownprojectContainer">
                    <strong className='title'>Detalles del Proyecto</strong>
                    <button className='buttonExitProject'
                        value={user.id}
                        name='currentUserId'//name: usuario actualmente loggeado
                    >Abandonar Proyecto</button>
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
            </form>}
        </>);
}
