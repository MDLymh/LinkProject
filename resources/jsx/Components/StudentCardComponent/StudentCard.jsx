import './StudentCard.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function StudentCard({student}){

    //Realizar un post 
    const handleClick = (student) =>{
        //quitar miembro de proyecto
        console.log(student.student_name + " " + student.id)
    }

    //realizar post
    return(<>
        <form action='/kick_from_project' method='post'>
            <div className="card">
                <img className="pictureProfile" src={student.picture}></img>
                <div className='card-data' >
                    <strong className='card-title'>{"Miembro de equipo"}</strong>
                    <p className='card-data'>{student.student_name + "\n" + student.career + "\n" + student.lab}</p>
                    <button className='buttonKick' 
                    value={student.id}
                    name='studentId'//name: id de estudiante por ser expulsado
                    > Expulsar </button>
                </div>
            </div>
        </form>
    </>);
}

ReactDOM.render(<SidebarUserNav/>, document.getElementById('root'));
