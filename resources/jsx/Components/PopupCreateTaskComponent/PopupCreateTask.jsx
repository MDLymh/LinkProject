import React, { useState } from 'react';
import './PopupCreateTask.css'; 
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function PopupCreateTask({ onClose, onSubmit }) {
    // const [formData, setFormData] = useState({
    //     content: '',
    //     student: '',
    //     scheduled: '',
    //     task_status: 1, // Default status
    // });

    const [content, setContent] = useState('');
    const [student, setStudent] = useState(0);
    const [scheduled, setScheduled] = useState('');
    const [task_status, setTaskStatus] = useState(1);

    const members = [
        {
            id: 2,
            memberName: "Pepito",
        },
    ]

    //Realizar un post 
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose(); // Close the popup after submit
    };

  
    return (<>
        <form action='/create_task' method='post'>
            <div className="popupOverlay">
                <div className="popupContent">
                    <h2>Crear tarea</h2>
                    <form onSubmit={handleSubmit}>
                        <label className='taskContent'>
                            Información de tarea:
                            <input
                                type="text"
                                value={content}
                                name="content"//name: informacion de la tarea
                                onChange={(e) =>{setContent(e.target.value)}}
                                required/>
                        </label>
                        <br></br>
                        <label className='selectMemberLabel'>
                            A signar a Miembro:
                            <select
                                className='selectMember'
                                value={student}
                                name="member"//name: miembro al que se asigna
                                onChange={(e)=>{setStudent(e.target.value)}} >
                                {members.map((item) =>{
                                    return (<option key={item.div} value={item.id}>{item.memberName}</option>)
                                    })}
                            </select>
                        </label>
                        <br></br>
                        <label>
                            Fecha de entrega:
                            <input
                                className='taskSchedule'
                                type="date"
                                value={scheduled}
                                name="scheduled"//name: fecha programada que finaliza tarea
                                required
                                onChange={(e)=>{setScheduled(e.target.value)}}
                            />
                        </label>
                        {/* <label>
                            Status:
                            <select
                                name="task_status"
                                value={formData.task_status}
                                onChange={handleChange}
                            >
                                <option value={1}>Programada</option>
                                <option value={2}>Finalizada</option>
                                <option value={3}>Vencida</option>
                                <option value={4}>Sin fecha de vencimiento</option>
                            </select>
                        </label> */}
                        <br></br>
                        <button className='buttonSubmit' type="submit">Crear</button>
                        <button className='buttonCancelCreate'  onClick={onClose}>Cancelar</button>
                    </form>
                </div>
            </div>
        </form>
    </>);
}

ReactDOM.render(<PopupCreateTask/>, document.getElementById('root'));
