import React, { useState } from "react"
import PropTypes from "prop-types"
import "./SidebarComponent.css"
import NotificationComponent from "../NotificationComponent/NotificationComponent"

const Sidebar = (props) => {


    const CareersNames = [
        "Licenciatura en Física",
        "Licenciatura en Matemáticas",
        "Licenciatura en Química",
        "Químico Farmacéutico Biólogo",
        "Ingeniería en Ciencia de Materiales",
        "Ingeniería Civil",
        "Ingeniería en Alimentos y Biotecnología",
        "Ingeniería en Topografía Geomática",
        "Ingeniería Industrial",
        "Ingeniería Mecánica Eléctrica",
        "Ingeniería Química",
        "Ingeniería en Logística y Transporte",
        "Ingeniería Informática",
        "Ingeniería Biomédica",
        "Ingeniería en Computación",
        "Ingeniería en Electromovilidad y Autotrónica",
        "Ingeniería en Electrónica y Sistemas Inteligentes",
        "Ingeniería Fotónica",
        "Ingeniería en Mecatrónica Inteligente",
        "Ingeniería Robótica",
    ]

    const currentUser = {
        profilePicture: props.profile_picture,
        userName: props.name,
        userMail:  props.code
    }

    const careers = [
        {
            id: 1,
            career: "Ingeniería Informática"
        },
        {
            id: 2,
            career: "Ingeniería Biomédica"
        },
        {
            id: 3,
            career: "Ingeniería en Computación"
        },
        {
            id: 4,
            career: "Ingeniería en Electromovilidad y Autotrónica"
        },
        {
            id: 5,
            career: "Ingeniería en Electrónica y Sistemas Inteligentes"
        },
        
    ];


    const innovations = [
        {
            id: 1,
            skill: "Radical",    
        },
        {
            id: 2,
            skill: "Incremental",    
        },
        {
            id: 3,
            skill: "Disruptiva",    
        },
        {
            id: 4,
            skill: "De productos / servicios",    
        },
        {
            id: 5,
            skill: "En los procesos de produccion",    
        },
        {
            id: 6,
            skill: "Tecnologica",    
        },
    ];

    const [selectedCareer, setSelectedCareer] = useState('');

    const handleCareerSelect = (event) =>{
        const selectedId = event.target.value;
        const selectObj = careers.find(career => career.id == selectedId);
        //to do filter projects

    }
    const notifications = [
        { message: 'Solicitud a unirse', timestamp: '2023-10-01 10:00 AM' },
        { message: 'Solicitud a unirse', timestamp: '2023-10-01 09:30 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 09:00 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 08:45 AM' },
        { message: 'Nueva tarea', timestamp: '2023-10-01 08:00 AM' },
        { message: 'Nueva reunion programada', timestamp: '2023-10-01 07:30 AM' },
    ];

    return (<>
            <div className='profileUserContainer'> Imagen Usuario
                <img className="profilePicture" src={currentUser.profilePicture}></img>
                <label className="userName">{currentUser.userName}</label>
            </div>
            <div className="notificationsContainer">
                <NotificationComponent notifications={notifications}/>
            </div>
            <div className="filtersContainer">
                <h2>Filtrar resultados</h2>
            </div>
    </>);
}

export default Sidebar