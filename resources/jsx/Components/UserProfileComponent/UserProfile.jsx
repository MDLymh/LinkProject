import { useState } from "react"
import "./UserProfile.css"
import Notifications from '../NotificationsComponent/NotificationComponent'
import FilterComponent from "../FilterComponent/FilterComponent";


export default function UserProfile({currentUser}){
// ejemplo usuario

let user = {
    name: 'John Doe',
    email: 'john.doe@alumnos.udg.mx',
    about_me: 'Me dedico a desarrollar aplicaciones en React para sitios web y estudio mi posgrado.',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder image
    career: 'Ing. Computacion',
    laboratory: 'Lab1',
    skills: [
        {
            id: 1,
            skill: "Liderazgo",
        },
        {
            id: 2,
            skill: "Pensamiento critico",
        }
    ]
    };

    return (
        <div className="userProfile">
            <div className="headerProfile">
                <img src={user.profilePicture} alt={`${user.name}'s profile`} className="pictureProfile" />
                <h1 className="userName">{user.name}</h1>
                <p className="userEmail">{user.email}</p>
            </div>
            <div className="detailsProfile">
                <h2>Acerca de mi</h2>
                <p>{user.about_me}</p>
                <p><strong>Carrera:</strong> {user.career}</p>
                <p><strong>Laboratorio actual:</strong> <span>{user.laboratory}</span> </p>
                <p><strong>Mis Habilidades:</strong> <span>
                    {user.skills.map((x, index) => {
                    return (<li className="itemList" key={x.skill}>{x.skill}</li>)
                        })
                }
                </span> </p>
            </div>
        </div>
    ); 
}
