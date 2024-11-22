import "./PopupWarning.css"
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

//alerta generica
export default function PopupWarning({errors, setIsErrorPopup}){

    return(
        <>
        <form onSubmit={setIsErrorPopup(false)}>
            <div className="popupOverlay">
                <div>
                    <label className="labelTitle">{"Error"}</label>
                </div>
                <div>
                    <ul className="errorsList">{errors.map((item) => {
                            return (<option key={item}>{item}</option>);
                        } )}</ul>
                </div>
                <button className="buttonClose" type="submit" >Cerrar</button>
            </div>
        </form>
        </>);
}


ReactDOM.render(<PopupWarning/>, document.getElementById('root'));
