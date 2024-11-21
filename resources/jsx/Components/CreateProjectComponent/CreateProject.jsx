import './CreateProject.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";


export default function CreateProject(){

    const membersNumber = [1, 2, 3, 4];
    let [maxMembers, setMaxMembers] = useState(1);
    let [asessor, setAssesor] = useState(0);
    let [innovation, setInnovation] = useState(0);
    let [description, setDescription] = useState('');
    let [projectName, setProjectName] = useState('');
  
    //Yael: aqui necesitaria saber que el suuario esta disponible para crear un proyecto nuevo.
    let user ={
      id:1,
      isLeader: false,//esta bandera cambia cuando cree el proyecto
    }
  //Yael: aqui necesitaria saber los Asesor de proyecto para mandar el id en el submit.
    let assesors = [
      {
        id:1,
        assesor_name: "Prof. Jose Maria Villegas"
      },
      {
        id:2,
        assesor_name: "Dra. Julia Zarate"
      },
      {
        id:3,
        assesor_name: "Mtro. Luis Montes"
      },
    ]
  
  //Yael: aqui necesitaria los tipos de innovacion.
    let innovations = [
      {
        id:1,
        innovation: "Incremental"
      },
      {
        id:2,
        innovation: "De productos/servicios"
      },
      {
        id:3,
        innovation: "En procesos productivos"
      },
    ]
  
  //Realizar un post 
  const createNewProject = ()=>{
    
  }
  
  return (<>
      <div className="createprojectContainer"> 
          <form className='formNewProject' onSubmit={(e) =>
            {
              e.preventDefault();
              //evento para enviar la informacion y Crear el nuevo proyecto
            }}>
              <strong> Nuevo proyecto</strong>
              <br></br>
              <label> Nombre de proyecto:
              <br></br>
                  <input 
                  placeholder='sistema de contadores'
                  type='text'/>
              </label>
              <br></br>
              <label> Descripcion de proyecto:
              <br></br>
              <textarea className='descriptionArea'
                  placeholder='sistema de contadores'
                  type='text'/>
              </label>
              <br></br>
              <label> Tipo de innovacion: 
                  <select className='selectInnovation' onChange={(e) => { setInnovation(e.target.value);}}>
                    {innovations.map((item) => { return(<option key={item.id} value={item.id}>{item.innovation}</option>)})}
                  </select>
              </label>
              <label> Maximo numero de miembros:
                  <select className='selectMaxMembers' onChange={(e) => { setMaxMembers(e.target.value);}}>
                    {membersNumber.map((item) => { return(<option key={item} value={item}>{item}</option>)})}
                  </select>
              </label>
              <label> Seleccione asesor:
                <select className='selectAssesor' onChange={(e) => { setAssesor(e.target.value);}}>
                    {assesors.map((item) => { return(<option key={item.id} value={item.id}>{item.assesor_name}</option>)})}
                  </select>
              </label>
              <button type="submit" style={{fontWeight: 'bold', fontSize: '15px', letterSpacing: '1px', height:'50px', width:'300px', marginTop:'25px', alignSelf:'center'}}>Crear proyecto</button>
          </form>
      </div>
  </>);
}