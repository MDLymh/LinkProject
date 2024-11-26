import "./PopupWarning.css"
import { useState } from "react";

//alerta generica
export const PopupWarning =({errors, setIsErrorPopup})=>{
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible || !errors || Object.keys(errors).length === 0) {
      return null;
    }

    return (
      <div className="errorAlert">
        <div className="errorContent">
          <strong>Aviso:</strong>
          <ul>
            {Object.entries(errors).map(([key, message], index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
        <button className="closeButton" onClick={() => setIsVisible(false)}>
          ×
        </button>
      </div>
    );
  };
