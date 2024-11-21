import './CreateMeeting.css'
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Csrf } from "../../";

export default function CreateMeeting() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [projectId, setProjectId] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    //cargar los proyectos del asesor para que pueda seleccionarlo para programar una nueva reunion
    let assesorProjects = [
        {
            id_project: 1,
            project_name: "Proyecto 1"
        },
        {
            id_project: 2,
            project_name: "Proyecto 1"
        },
        {
            id_project: 3,
            project_name: "Proyecto 1"
        },
    ]

    return (
    <>
    <div className='datetimeContainer'>
        <label className='labelMeetings'>Agendar Reunion</label>
        <div className='assesorProjects'>
            <select className='projectsList' onChange={(e)=>{
                setProjectId(e.target.key);
            }}>
                {assesorProjects.map((item, index) =>
                {
                    return(<option key={item.id_project}>{item.project_name}</option>);
                })
                }
            </select>
        </div>
        <div className="datetime-picker">
                <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className="date-input"
                />
                <input
                type="time"
                value={time}
                onChange={handleTimeChange}
                className="time-input"
                />
        </div>
        <button className='buttonSaveMeeting'>Guardar</button>
    </div>
    </>
    );
}
