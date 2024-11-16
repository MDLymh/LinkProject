import './CreateMeeting.css'
import React, { useState } from 'react';

export default function CreateMeeting() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

  const handleTimeChange = (e) => {
        setTime(e.target.value);
    };
  
  
    return (
    <>
    <div className='datetimeContainer'>
        <label className='labelMeetings'>Agendar Reunion</label>
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
        <button>Guardar</button>
    </div>
    </>
    );

}

ReactDOM.render(<CreateMeeting/>, document.getElementById('root'));
