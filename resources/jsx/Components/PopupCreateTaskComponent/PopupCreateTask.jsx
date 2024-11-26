import React, { useEffect, useState } from 'react';
import './PopupCreateTask.css';

export const  PopupCreateTask=({ onClose, onSubmit }) =>{
    const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
    const [content, setContent] = useState('');
    const [student, setStudent] = useState(0);
    const [scheduled, setScheduled] = useState('');
    const [task_status, setTaskStatus] = useState(1);
    const [members,setMembers]= useState([
        {
            id: 2,
            memberName: "Pepito",
        },
    ]);

    useEffect(()=>{
        const getMembers = async () => {


            try{
                let response = await fetch('/project/getMembers',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrf
                    },
                    body: JSON.stringify({
                        projectId: window.__INITIAL_DATA__.user.id_project
                    })
                })

                if(!response.ok){
                    throw new Error('Error de conexion');
                }
                if(response.status ==200){
                   setMembers(await response.json());
                }
            }catch(error){
                console.error(error);
            }
          };
          getMembers();
    },[]);

    console.log(members);

    //Realizar un post
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose(); // Close the popup after submit
    };


    return (<>
        <form action='/create_task' method='post'>
            <div className="popupOverlay">
                <div className="popupContent">
                    <h2>Crear tarea</h2>
                    <form action="/task/register" method='POST' onSubmit={handleSubmit}>
                        <label className='taskContent'>
                            Información de tarea:
                            <input
                                type="text"
                                value={content}
                                name="content"//name: informacion de la tarea
                                onChange={(e) =>{setContent(e.target.value)}}
                                required/>
                        </label>
                        <br></br>
                        <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
                        <label className='selectMemberLabel'>
                            A signar a Miembro:
                            <select
                                className='selectMember'
                                value={student}
                                name="memberId"//name: miembro al que se asigna
                                onChange={(e)=>{setStudent(e.target.value)}} >
                                {members.map((member)=>(
                                    <option value={member.id}>{member.name}</option>
                                ))}
                            </select>
                        </label>
                        <br></br>
                        <label>
                            Fecha de entrega:
                            <input
                                className='taskSchedule'
                                type="date"
                                value={scheduled}
                                name="scheduled"//name: fecha programada que finaliza tarea
                                required
                                onChange={(e)=>{setScheduled(e.target.value)}}
                            />
                        </label>
                        <br></br>
                        <button className='buttonSubmit' type="submit">Crear</button>
                        <button className='buttonCancelCreate'  onClick={onClose}>Cancelar</button>
                    </form>
                </div>
            </div>
        </form>
    </>);
}
