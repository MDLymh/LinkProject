import React from "react";

function signin_page(){

    const studentMailDomain = "@alumnos.udg.mx"
    const assesorMailDomain = "@academicos.udg.mx"

    const username = "";
    const password = "";

    const handleSubmit = (event) => {
        event.preventDefault();
        // logic
        console.log(`Username: ${username}, Password: ${password}`);
      };
  

    return(<>
                
    <div className="login-container">
      <div className='div_h1_title'>
        <h1> LinkProject </h1>
      </div>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="my_username@domainname.udg.mx"
          />
        </div>
        <div className="form-group">
         
        </div>
        <button type="submit">Registrarse</button>
        <button >Regresar</button>
        <div className='div_reset'>
        </div>
      </form>

      <br/>
      
    </div>

    </>);
}

export default signin_page