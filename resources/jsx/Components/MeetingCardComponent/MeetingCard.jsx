import './MeetingCard.css';

export const MeetingCard=({meeting, setMeetings})=>{

    //Yael: si el usuario no es estudiante, si renderiza el boton.
    let user ={
        id:1,
        isStudent: false,
    }

    //Realizar un post
    const handleCancelMeeting =(e) => {
        //Yael: aqui la llamada seria para un delete
        console.log(e.target.value);
        //refrescar contenido al padre
        setMeetings(e.target.value);//id de la tabla meetings
    }
    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');

    return (<>
        <form action='/meeting/cancel' method='post'>
        <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
            <div className="card">
                <div className='card-data' >
                    <strong className='card-title'>{"Fecha programada:  " + meeting.schedule}</strong>
                    <strong className='meeting-data'>-Informacion:</strong>
                    <p className='card-data'>{meeting.description}</p>
               </div>
               <div>
                {user.isStudent ? (null) :
                (
                    <button className='buttonCancel'
                            type='submit'
                            value={meeting.id}
                            name='meetingId'//name: Id de la reunion por cancelar
                            >Cancelar</button>
                )}
               </div>
            </div>
        </form>
        </>);
}

