import React, { useState } from 'react';
import './PopupCreateTask.css';
import ReactDOM from "react-dom";
import { Csrf } from "../../";

export default function PopupCreateTask({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        content: '',
        student: '',
        scheduled: '',
        task_status: 1, // Default status
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose(); // Close the popup after submit
    };

    return (
        <div className="popupOverlay">
            <div className="popupContent">
                <h2>Crear tarea</h2>
                <form onSubmit={handleSubmit}>
                    <label className='taskContent'>
                        Información de tarea:
                        <input
                            type="text"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br></br>
                    <label className='selectMemberLabel'>
                        A signar a Miembro:
                        <select
                            className='selectMember'
                            name="member"
                            value={formData.task_status}
                            onChange={handleChange} >
                            <option value={1}>Juan</option>
                            <option value={2}>Pepito</option>
                            <option value={3}>Lissa</option>
                        </select>
                    </label>
                    <br></br>
                    <label>
                        Fecha de entrega:
                        <input
                            className='taskSchedule'
                            type="date"
                            name="scheduled"
                            value={formData.scheduled}
                            onChange={handleChange}
                            required
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
                    <button type="submit" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}
