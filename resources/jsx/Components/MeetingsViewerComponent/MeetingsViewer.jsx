import './MeetingsViewer.css'
import MeetingCard from '../MeetingCardComponent/MeetingCard'
import ReactDOM from "react-dom";
import React, {useState} from 'react';
import { Csrf } from "../../";


export default function MeetingsViewer(){

    //Yael: aqui necesito el usuario loggeado.
    let user = {
        id: 1,
        isStudent: false,
    }

    //Yael: aqui necesito las reuniones, si puedes ordenadas por fecha de mas proxima hacia atras.
    let [meetings, setMeetings] = useState([]);

    meetings = [
        {
            id: 1,
            scheduled: "2024-11-29 12:00 p.m.",
            description: "Reunion con asesor"
        },
        {
            id: 2,
            scheduled: "2024-12-01 2:00 p.m.",
            description: "Revision de avance y correciones."
        },
        {
            id: 3,
            scheduled: "2024-12-05 2:00 p.m.",
            description: "Revision de diagramas de flujo."
        },
    ]

    return (<>
        <div className="meetingsContainer">
            <strong>Proximas reuniones</strong>
            <ol className='meetingsList'>
                {meetings.map((item, key)=>
                    {
                        return(<MeetingCard key={item.id} meeting={item} setMeetings={setMeetings}/>);
                    })}
            </ol>
        </div>
    </>);
}
