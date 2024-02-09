const registro=async (alias,password)=>{
    const data= await fetch("http://localhost:8080/api/usuarios/registro",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ alias, password }),
    });
    const json=await data.json();
    localStorage.setItem("usuarioServidor", json.json)
}

export {registro}