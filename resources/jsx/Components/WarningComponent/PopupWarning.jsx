import "./PopupWarning.css"
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

//alerta generica
export default function PopupWarning({title, message}){

    return(
    <>
    <div>
        <label className="label_title">{title}</label>
    </div>
    <div>
        <label className="label_message">{message}</label>
    </div>
    </>)
}


ReactDOM.render(<PopupWarning/>, document.getElementById('root'));
