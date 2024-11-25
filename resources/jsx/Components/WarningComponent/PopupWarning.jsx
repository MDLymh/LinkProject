import "./PopupWarning.css"

//alerta generica
export const PopupWarning=({title, message})=>{

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

