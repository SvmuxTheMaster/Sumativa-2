document.getElementById("formLogin").addEventListener("submit",function(e){
    e.preventDefault();

    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("correo").value;

    var validacionRut = /^[0-9]+-[0-9Kk]$/;
    var validacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorMensaje = "";


    if (!validacionRut.test(rut)){
        errorMensaje = "Intorduzca RUT valido";
    }
    
    else if (!validacionEmail.test(email)){
        errorMensaje = "Introduzca Correo valido"
    }

    if (errorMensaje){
        document.getElementById("error").textContent = errorMensaje;
    }else{
        alert("Usuario Registrado Exitosamente");
        window.location.href = ("inicio.html");
    }
});