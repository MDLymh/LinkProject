import { useEffect, useState } from "react"
import "./UserProfile.css"


export const UserProfile=({current})=>{

    const [user,setUser] =  useState([]);
    // Yael: aqui necesitaria los datos del usuario actual loggeado
    const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
    let getUser = async ()=>{
        const response = await fetch('/getUserProfile',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrf
            }
        });
        if(!response.ok){
            throw new Error('Error de conexion');
        }
        if(response.status ==200){
            setUser(await response.json());
        }
    }
    useEffect(()=>{
        getUser();
    },[])
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

    //Realizar un post
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
                { user.profilePicture !== null &&
                    <img src={user.profilePicture} alt={`${user.name}'s profile`} className="pictureProfile" />

                }
                { user.profilePicture === null &&
                    <img src={'https://via.placeholder.com/150'} alt={`${user.name}'s profile`} className="pictureProfile" />

                }
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
                <p><strong>Carrera:</strong> {user.carrer}</p>
                <p><strong>Laboratorio actual:</strong> <span>{user.laboratory}</span> </p>
                <p><strong>Mis Habilidades:</strong> <span>
                     {user.skills && Object.values(user.skills).map((x) => (
                        <li className="itemList" id={x.id}>{x.skill}</li>
                     ))
                }
                </span> </p>
            </div>
        </div>
    );
}

