import './MeetingsViewer.css';
import { useEffect, useState } from 'react';
import { MeetingCard } from '../../';


export const MeetingsViewer = ()=>{

    //Yael: aqui necesito las reuniones, si puedes ordenadas por fecha de mas proxima hacia atras.
    let [meetings, setMeetings] = useState([]);

    useEffect(()=>{
        const getMeetings = async () => {

            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try{
                let response = await fetch('/meeting/get',{
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
                    setMeetings(await response.json());
                }
            }catch(error){
                console.error(error);
            }
          };
          getMeetings();
    },[]);

    return (<>
        <div className="meetingsContainer">
            <strong>Proximas reuniones</strong>
            <ol className='meetingsList'>
                {meetings.map((item, key)=>
                    {
                        return (<MeetingCard key={item.id} meeting={item} setMeetings={setMeetings}/>);
                    })}
            </ol>
        </div>
    </>);
}
