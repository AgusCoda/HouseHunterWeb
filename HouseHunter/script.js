function ValidarLogin(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var validator = true;
    if (usuario.length >= 8) {
      document.getElementById("ErrorUsuario").style.display = "none";
    } else {
      var validator = false;
      document.getElementById("ErrorUsuario").style.display = "block";
    }

    if (contrasenia.length>=8) {
      document.getElementById("ErrorContrasenia").style.display = "none";
    } else {
      var validator = false;
      document.getElementById("ErrorContrasenia").style.display = "block";
    }

    if (validator==true) {
      if (usuario == "Kevin2006" && contrasenia == "SAO.2006") {
        alert("Esta es una cuenta de administrador");
      } else {
        alert("Ingresaste exitosamente!");
      }
    }

    if (validator==true) {
      document.getElementById("formulario").submit();
    }
}