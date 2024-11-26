import './CreateMeeting.css'
import React, { useEffect, useState } from 'react';

export const CreateMeeting =() =>{
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [assesorProjects,setAssesorProjects]= useState([]);
    const [projectId, setProjectId] = useState('');
    useEffect(()=>{
        const getProjects = async () => {

            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try{
                let response = await fetch('/project/getAllProjectConsultants',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrf
                    },
                })

                if(!response.ok){
                    throw new Error('Error de conexion');
                }
                if(response.status ==200){
                    setAssesorProjects(await response.json());
                }
            }catch(error){
                console.error(error);
            }
          };
          getProjects();
    },[]);
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    //Realizar un post
    const createMeeting = ()=> {
        const url = "localhost:80/crete_meeting.php/"

    }

    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
    return (
    <>
    <form action='/meeting/create' method='post' >
        <div className='datetimeContainer'>
        <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
            <label className='labelMeetings'>Agendar Reunion</label>
                <div className='assesorProjects'>
                    <select className='projectsList'
                        name="projectId"//name: id del proyecto al que se dirige la reunion nueva programada
                        onChange={(e) => {
                            setProjectId(e.target.key);
                        }}>
                            {assesorProjects.map((item) =>
                            {
                                return(<option value={item.id_project}>{item.project_name}</option>);
                            })
                            }
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Descripcion</label>
                    <input type="text" name='description' id='description' />
                </div>
                <div className="datetime-picker">
                    <input
                    type="date"
                    value={date}
                    name="date"//name: fecha de la reunion
                    onChange={handleDateChange}
                    className="date-input"
                    />
                    <input
                    type="time"
                    value={time}
                    name="time"//name: hora de la reunion
                    onChange={handleTimeChange}
                    className="time-input"
                    />
                </div>
                <button className='buttonSaveMeeting'>Guardar</button>
            </div>
        </form>
    </>
    );
}
