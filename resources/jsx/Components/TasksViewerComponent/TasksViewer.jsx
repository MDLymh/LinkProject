import { useState } from 'react';
import './TasksViewer.css';
import { TaskCard,PopupCreateTask } from '../../';
export const TasksViewer=({user})=>{

    //1:programada
    //2:finalizada
    //3:vencida
    //4:sin fecha de vencimiento
    let taskStatus = [1, 2, 3, 4];

    let projectTasks = [
        {
            id: 1,
            scheduled: "2024-11-20",
            created: "2024-10-20",
            content: "Diseño de vistas",
            student: "Juan",
            task_status: 1,
        },
        {
            id: 2,
            scheduled: "2024-11-20",
            created: "2024-10-21",
            content: "Diseño de entidad relacion",
            student: "Juan",
            task_status: 2,
        },
        {
            id: 3,
            scheduled: "2024-11-01",
            created: "2024-10-29",
            content: "Construccion de vistas",
            student: "Pepito",
            task_status: 3,
        },
        {
            id: 4,
            scheduled: "2024-11-20",
            created: "2024-11-20",
            content: "Integracion front-end con back-end",
            student: "Pepito",
            task_status: 4,
        },
    ]

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    //Realizar un post
    const handleCreateTask = (newTask) => {
        setProjectTasks((prevTasks) => [
            prevTasks,
            { id: prevTasks.length + 1, newTask }, //
        ]);

    };

    return (
        <>
        <div className='viewtaskContainer'>
            <button className='buttonCreate'  onClick={() => setIsPopupOpen(true)}> Nueva tarea</button>

            {projectTasks.map((item) =>{
                return(<TaskCard key={item.id} _task={item}/>);
            })}

            {isPopupOpen && (
                <PopupCreateTask
                    onClose={() => setIsPopupOpen(false)}
                    onSubmit={handleCreateTask}
                />
            )}
        </div>
        </>
    );
}
