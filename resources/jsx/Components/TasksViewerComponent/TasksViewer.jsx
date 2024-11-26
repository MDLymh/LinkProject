import { useEffect, useState } from 'react';
import './TasksViewer.css';
import { TaskCard,PopupCreateTask } from '../../';
export const TasksViewer=({user})=>{
    const [task,setTask] = useState([]);
    //1:programada
    //2:finalizada
    //3:vencida
    //4:sin fecha de vencimiento
    let taskStatus = [1, 2, 3, 4];

    useEffect(()=>{
        let getTask = async()=>{
            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try{
                let response = await fetch('/task/getProjectTasks',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrf
                    }
                })
                if(!response.ok){
                    throw new Error('Error de conexion');
                }
                if(response.status ==200){
                    setTask(await response.json());

                }
            }catch(error){
                console.error(error);
            }
        }
        getTask();
    },[]);


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    //Realizar un post
    const handleCreateTask = (newTask) => {
        setTask((prevTasks) => [
            prevTasks,
            { id: prevTasks.length + 1, newTask }, //
        ]);

    };

    return (
        <>
        <div className='viewtaskContainer'>
            <button className='buttonCreate'  onClick={() => setIsPopupOpen(true)}> Nueva tarea</button>

            {task.map((item) =>{
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
