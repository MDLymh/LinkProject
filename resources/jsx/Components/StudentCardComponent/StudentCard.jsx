import './StudentCard.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function StudentCard({student}){

    const handleClick = (student) =>{
        //quitar miembro de proyecto
        console.log(student.student_name + " " + student.id)
    }

    return(<>
        <div className="card">
            <img className="pictureProfile" src={student.picture}></img>
            <div className='card-data' >
                <strong className='card-title'>{"Miembro de equipo"}</strong>
                <p className='card-data'>{student.student_name + "\n" + student.career + "\n" + student.lab}</p>
                <button className='buttonKick' onClick={(e)=>{handleClick(student)}}> Expulsar </button>
           </div>
        </div>
    </>);
}

ReactDOM.render(<SidebarUserNav/>, document.getElementById('root'));
