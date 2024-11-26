import { useEffect, useState } from 'react';
import './FilterComponent.css'

export const FilterComponent = ({ setFilterCareer, setFilterLab }) => {

    const [careers, setCareers] = useState([]);
    const [laboratories, setLaboratories] = useState([]);
    const [isLabsLoaded, setIsLabsLoaded] = useState(false);

    useEffect(() => {
        const getCourses = async () => {
            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try {
                let response = await fetch('/course/get', {
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
                    setCareers(await response.json());
                }
            } catch (error) {
                console.error(error);
            }
        };

        const getLaboratories = async () => {
            const csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
            try {
                let response = await fetch('/laboratories/getAll', {
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
                    setLaboratories(await response.json());
                    setIsLabsLoaded(true);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getCourses();

        if (!isLabsLoaded) {
            getLaboratories();
        }
    }, [isLabsLoaded]);

    return (
        <>
            <div className="filtersContainer">
                <label>Filtrar</label>
                <div className="careersFilter">
                    <select onChange={(e) => {
                        console.log(e.target.value);
                        setFilterCareer(e.target.value);
                    }}>
                        <option value={0} selected disabled>Selecciona filtro</option>
                        {careers.map((item) => {
                            return (<option key={item.id} value={item.id}>{item.name}</option>);
                        })}
                    </select>
                </div>
                <div className="labsFilter">
                    <select onChange={(e)=>setFilterLab(e.target.value)}>
                        <option value={0} selected disabled>Selecciona filtro</option>
                        {laboratories.map((laboratory) => {
                            return (<option  value={laboratory.id}>{laboratory.name}</option>);
                        })}
                    </select>
                </div>
            </div>
        </>
    );
};
