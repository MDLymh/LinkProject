import { useState } from 'react'
import './ChangeProfileData.css'
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";


export default function ChangeProfile(){

    //Realizar un post para actualizar info
    const onSubmit = (event) =>{

        let userName;
        let userDescription;
        let useravilable;
        let userSkills = [];
    }

    return (<>
        <div className="changeProfileContainer">
            <form>
                
            </form>
        </div>
    </>);
}
ReactDOM.render(<ChangeProfile/>, document.getElementById('root'));

