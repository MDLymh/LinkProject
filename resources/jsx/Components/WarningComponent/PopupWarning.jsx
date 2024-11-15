import "./PopupWarning.css"
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

//alerta generica
export default function PopupWarning(props){

    return(
    <>
    <div>
        <label className="label_title">{props.title}</label>
    </div>
    <div>
        <label className="label_message">{props.message}</label>
    </div>
    </>)
}


ReactDOM.render(<PopupWarning/>, document.getElementById('root'));
