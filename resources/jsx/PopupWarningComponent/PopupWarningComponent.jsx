import Proptypes from "prop-types"
import "./PopupWarningComponent.css"

//alerta generica
function PopupWarningComponent(props){

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

export default PopupWarningComponent