import "./PopupWarning.css"

//alerta generica
export const PopupWarning=({title, message})=>{

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

