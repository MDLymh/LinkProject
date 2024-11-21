import './StudentCard.css';

export const StudentCard=({student})=>{

    return(<>
        <div className="card">
            <img className="pictureProfile" src={student.picture}></img>
            <div className='card-data' >
            <strong className='card-title'>{"Miembro de equipo"}</strong>
                <p className='card-data'>{student.student_name + "\n" + student.career + "\n" + student.lab}</p>
           </div>
        </div>
    </>);
}

