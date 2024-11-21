import { useState } from "react";
import './FilterComponent.css'
import ReactDOM from "react-dom";

export default function FilterComponent({setFilterCareer, setFilterInnovations, setFilterLab}){

    //aqui necesito los valores de la tabla careers, dejo ejemplo
    const careers = [
        {
            id: 1,
            name: "Ing. Computacion"
        },
        {
            id: 2,
            name: "Ing. Informatica"
        }
    ];

    //aqui de la tabla InnovationsTypes
    const innovations = [        
        {
            id: 1,
            name: "Disruptivo"
        },
        {
            id: 2,
            name: "Radical"
        },
        {
            id: 3,
            name: "De productos/servicios"
        },

    ];

    //este seria el equivalenete a un SELECT DISTINCT en la tabla Students para obtener el campo current_laboratory
    //este campo creo lo puedo dejar fijo desde el Signin en un select para dejar fijos estos valores ''
    const laboratories = [ "Laboratorio Abierto 1", "Laboratorio Abierto 2", "Laboratorio Abierto 3"];


    const handleSelectionChange = (event) => {
        const options = event.target.options;
        const valueArray = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                valueArray.push(options[i].value);
            }
        }
        setSelectedInnovations(valueArray);
    };
    

    return (
        <>
        <div className="filtersContainer">
            <label>Filtrar</label>
            <div className="careersFilter" >
                <select onChange={(e) => { 
                    console.log(e.target.option);
                    setFilterCareer(e.target.option);}}>
                    {careers.map((item, key)=>{
                        return (<option key={item.id}>{item.name}</option>);
                    })}
                </select>
           </div>
           <div className="innovationsFilter"  >
                <select size={3} multiple onChange={(e)=>{
                     const options = e.target.options;
                     const valueArray = [];
                     for (let i = 0; i < options.length; i++) {
                         if (options[i].selected) {
                             valueArray.push(options[i].value);
                         }
                     }
                     console.log(valueArray);
                     setFilterInnovations(valueArray);
                }}>
                    {innovations.map((item, key)=>{
                        return (<option key={item.id}>{item.name}</option>);
                    })}
                </select>
           </div>
           <div className="labsFilter" >
                <select>
                    {laboratories.map((item)=>{
                        return (<option key={item}>{item}</option>);
                    })}
                </select>
           </div>
        </div>
        </>
    );
}

ReactDOM.render(<FilterComponent/>, document.getElementById('root'));
