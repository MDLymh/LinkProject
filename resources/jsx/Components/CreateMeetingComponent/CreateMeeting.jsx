import './CreateMeeting.css'
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function CreateMeeting() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    //cargar los proyectos del asesor para programar una nueva tarea
    let assesorProjects = []
  
    return (
    <>
    <div className='datetimeContainer'>
        <label className='labelMeetings'>Agendar Reunion</label>
        <div className='assesorProjects'>
            <ol className='projectsList'>

            </ol>
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

ReactDOM.render(<CreateMeeting/>, document.getElementById('root'));
