import React from 'react'
import "./PopupWarning.css"
import ReactDOM from "react-dom";

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

Popup_warning.Proptypes = {
    title: propTypes.string,
    message: propTypes.string,
}

Popup_warning.defaultProps = {
    title: "Advertencia",
    message: ""
}

ReactDOM.render(<PopupWarning/>, document.getElementById('root'));
