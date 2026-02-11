// 1) Función que SIMULA una petición asincrónica (como fetch a una API)
function obtenerUsuarioPorId(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const usuarios = [{id: 1, nombre: "Ana", rol: "Aprendiz"},{id: 2, nombre: "Carlos", rol: "Instructor"}];

            const usuario = usuarios.find(u => u.id === id);

            if (usuario) {
                resolve(usuario);                                
            }else{
                reject(new Error("Usuario no encontrado"));
            }
        }, 3000);
    });
}
async function mostrarUsuario(id) {
    try {
        console.log("Buscando usuario .....");

        const usuario = await obtenerUsuarioPorId(id);
        
        console.log("Resolve => Usuario encontrado", usuario);
        
    } catch (error) {
        console.log("Reject => Error:", error.message);
    } finally{
        console.log("Proceso Terminado");
    }
}

mostrarUsuario(1);
mostrarUsuario(7);