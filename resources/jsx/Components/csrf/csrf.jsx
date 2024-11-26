import "./csrf.css"

export const Csrf = ()=>{
    let csrf = document.querySelector("meta[name='csrf']").getAttribute('content');
    return (
        <>
            <input type="hidden" name="_token" value={csrf} autocomplete="off"></input>
        </>
    );

}
