export const fetchPost = async (url,data,setter=()=>{}) =>{
    try{
        let response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
              }
        });
        if(!response.ok){
            throw Error('Error en conexion');
        }
        setter(response);

    }catch (e){
        console.error('Hubo un error de conexion con el servidor: '+ e + ' '+url);
    }

}