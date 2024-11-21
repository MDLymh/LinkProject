import './TaskCard.css';

export const TaskCard=({_task})=>{


    return (<>
    <div className="taskcardContainer">
        <strong className="student">{ "Asignado a:  " + _task.student}</strong>
        <label className="starts">{"Inicio: " + _task.created}</label>
        {_task.task_status != 4 ? (<label className="scheduled">{"Finaliza: " + _task.scheduled}</label>
            ) : (<label className="scheduled">Finaliza: NA</label>)}

        <p className='content'>{_task.content}</p>

    </div>

    </>);
}
