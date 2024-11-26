import './StudentCard.css';

export const StudentCard=({student})=>{
    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');

    //Realizar un post
    const handleClick = (student) =>{
        //quitar miembro de proyecto
        console.log(student.student_name + " " + student.id)
    }

    //realizar post
    return(<>
        <form action='/project/kick' method='post'>
        <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
            <div className="card">
                <img className="pictureProfile" src={student.picture== null ?'https://via.placeholder.com/150':student.picture}></img>
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

