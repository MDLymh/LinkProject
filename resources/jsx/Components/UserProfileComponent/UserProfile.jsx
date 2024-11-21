import { useState } from "react"
import "./UserProfile.css"


export default function UserProfile({current}){
    
    // Yael: aqui necesitaria los datos del usuario actual loggeado
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

    //cambair estado imagen
    const [profilePicture, setSelectedImage] = useState('https://via.placeholder.com/150');
    const [about_me, setAboutMe] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChangePicture = () => {
        // Update the profile picture with the selected image
        if (profilePicture) {
            setUser ((prevUser ) => ({
                ...prevUser ,
                profilePicture: profilePicture,
            }));
            setSelectedImage(null); // Reset the selected image
        }

    };

    return (
        <div className="userProfile">
            <div className="headerProfile">
                <img src={user.profilePicture} alt={`${user.name}'s profile`} className="pictureProfile" />
                {/* <UploadImage/> */}
                <h1 className="userName">{user.name}</h1>
                <p className="userEmail">{user.email}</p>

                <input className=""
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    style={{ display: 'none' }} 
                    id="fileInput"  />
                <button className="changePicture" 
                        onClick={() => document.getElementById('fileInput').click()} >
                        Cambiar</button>
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
    
