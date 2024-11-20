import './StudentCard.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function StudentCard({student}){

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

ReactDOM.render(<SidebarUserNav/>, document.getElementById('root'));
