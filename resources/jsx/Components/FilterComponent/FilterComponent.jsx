import { useState } from "react";
import './FilterComponent.css'

export default function FilterComponent(){

    //aqui usaria los valores para los filtros de la lista de proyectos 
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
    const laboratoryLevel = [
        {
            name: "Laboratorio 1"
        },
        {
            name: "Laboratorio 2"
        },
        {
            name: "Laboratorio 3"
        }
    ];
    const innovations = [
        {
            id: 1,
            name: "Disruptivo"
        }
    ];

    const [selectedInnovations, setSelectedItems] = useState([]);
    const handleSelectionChange = (event) => {
        const options = event.target.options;
        const valueArray = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                valueArray.push(options[i].value);
            }
        }
        setSelectedItems(valueArray);
    };

    return (
        <>
        <div className="filtersContainer">
            <label>Filtrar</label>
           <div className="careersFilter" >
                <select>
                    {careers.map((item, index)=>{
                        return (<option>{item.name}</option>);
                    })}
                </select>
           </div>
           <div className="labsFilter">
                <select>
                    {laboratoryLevel.map((item, index)=>{
                        return (<option>{item.name}</option>);
                    })}
                </select>
           </div>
           <div className="innovationsFilter">
                <select multiple={true} value={selectedInnovations} onChange={handleSelectionChange}>
                    {innovations.map((item, index)=>{
                        return (<option>{item.name}</option>);
                    })}
                </select>
           </div>
        </div>
        </>
    )
}

ReactDOM.render(<FilterComponent/>, document.getElementById('root'));
