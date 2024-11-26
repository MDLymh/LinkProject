import './CreateProject.css';
import { useEffect, useState } from 'react';

export const CreateProject = ({ setIsPopupOpen, onSubmit }) => {

    const membersNumber = [1, 2, 3, 4];
    let [maxMembers, setMaxMembers] = useState(1);
    let [asessors, setAssesors] = useState([]);
    let [description, setDescription] = useState('');
    let [innovation, setInnovation] = useState('');
    let [knowledge, setKnowledge] = useState('');
    let [area, setArea] = useState('');
    let [projectName, setProjectName] = useState('');

    useEffect(() => {
        const getConsultants = async () => {
            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try {
                let response = await fetch('/consultant/getAll', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrf
                    },
                })
                if (!response.ok) {
                    throw new Error('Error de conexion');
                }
                if (response.status == 200) {
                    setAssesors(await response.json());
                }
            } catch (error) {
                console.error(error);
            }
        };
        getConsultants();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setIsPopupOpen(false);  // Cerrar el popup después de submit
    };

    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');

    return (
        <>
            <div className='popupOverlay'>
                <div className="createprojectContainer">
                    <form className='formNewProject' action='/project/create' method='post'>
                    <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
                        <strong> Nuevo proyecto</strong>
                        <br></br>
                        <label> Nombre de proyecto:
                            <br></br>
                            <input
                                value={projectName}
                                onChange={(e)=>{setProjectName(e.target.value)}}
                                name='name'
                                placeholder='sistema de contadores'
                                type='text' />
                        </label>
                        <br></br>
                        <label> Descripcion de proyecto:
                            <br></br>
                            <textarea className='descriptionArea'
                                value={description}
                                onChange={(e)=>{setDescription(e.target.value)}}
                                name='description'
                                placeholder='sistema de contadores'
                                type='text' />
                        </label>
                        <label> Conocimiento requerido:
                            <br></br>
                            <textarea className='descriptionArea'
                                value={knowledge}
                                onChange={(e)=>{setKnowledge(e.target.value)}}
                                name='knowledge'
                                placeholder='Html,css...'
                                type='text' />
                        </label>
                        <br></br>
                        <label> Tipo de innovacion:
                            <input type="text"
                                value={innovation}
                                onChange={(e)=>{setInnovation(e.target.value)}}
                                name='innovation'
                                placeholder='sistema de contadores'/>
                        </label>
                        <br />
                        <label> Area:
                            <input type="text" Value={area}
                            onChange={(e)=>{setArea(e.target.value)}}
                            name='area'
                            placeholder='Ingenieria'/>
                        </label>
                        <label> Maximo numero de miembros:
                            <select className='selectMaxMembers'
                                value={maxMembers}
                                name='maxMembers'
                                onChange={(e) => { setMaxMembers(e.target.value); }}>
                                {membersNumber.map((item) => { return (<option key={item} value={item}>{item}</option>) })}
                            </select>
                        </label>
                        <label> Seleccione asesor:
                            <select className='selectAssesor'
                                name='assesorId'
                                onChange={(e) => { setAssesors(e.target.value); }}>
                                {asessors.map((item) => { return (<option key={item.id} value={item.id}>{item.assesor_name}</option>) })}
                            </select>
                        </label>
                        <button className='buttonSubmit'
                            type="submit" style={{ fontWeight: 'bold', fontSize: '15px', letterSpacing: '1px', height: '50px', width: '300px', marginTop: '25px', alignSelf: 'center' }}
                        >Crear proyecto</button>
                        <button className='cancel'
                            style={{ fontWeight: 'bold', fontSize: '15px', letterSpacing: '1px', height: '50px', width: '300px', marginTop: '25px', marginBottom: '20px', alignSelf: 'center', color: 'white', backgroundColor: 'rgba(52, 177, 52, 0.925)' }}
                            onClick={(e) => { e.preventDefault(); setIsPopupOpen(false); }}>Cancelar</button>
                    </form>
                </div>
            </div>
        </>
    );
}
