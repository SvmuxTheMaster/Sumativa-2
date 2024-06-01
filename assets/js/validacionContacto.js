document.getElementById("formLogin").addEventListener("submit",function(e){
    e.preventDefault();

    const email = document.getElementById("correo").value;
    
    var validacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validacionEmail.test(email)){
        alert("Mensaje enviado con exito")
        window.location.href = ("inicio.html")
        
    } else {
        const errorMensaje = document.getElementById("error");
        errorMensaje.textContent = 'Introduzca un correo valido'
    }

});