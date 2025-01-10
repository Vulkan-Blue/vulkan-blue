


var usuarioNuemero = 0;
var usuario = "desconocido";
var contrasena = "desconocido";
var usuar = document.createElement("p");
usuar.id = "valorGuardado";
var contrase = document.createElement("p");
var valor = document.getElementById("Usuario").value;
usuar.textContent = ("usuario "+ usuario);
contrase.textContent = ("contraseña "+contrasena);



function actualizarTexto() {
    usuarioNuemero = usuarioNuemero + 1;
    var texto = document.getElementById("Usuario").value;
    usuario = texto;
   //guardar
     usuario = "usuario "+ texto + " " + usuarioNuemero;
     usuar.textContent = ( usuario);
     valor = usuario ;
      localStorage.setItem("miVariable", valor);
     

      //crear nuevas etiquetas
      var nueva = document.createElement("p");
      nueva.id = "valorGuardado";
      nueva.textContent = ( usuario);
      document.getElementById("uyc").appendChild(nueva);   
}

function TodaslasP(){
    
    
    var texto = document.getElementById("Usuario").value;
    usuario = texto;
     
   
}

function mostrarValor() 
{ 
    var valor = localStorage.getItem("miVariable");
     document.getElementById("valorGuardado").textContent = valor || "No hay valor guardado.";

}


document.getElementById("uyc").appendChild(usuar);
document.getElementById("uyc").appendChild(contrase);
document.getElementById("datos").appendChild(usuar);







function AcederPic(){
    var iniciar = document.getElementById('iniciarSecc').value;
     var usuariosn = document.getElementById('Usuario').value;
     var contrasn = document.getElementById('Contrasena').value;
      
    
    
    
    
    if(usuariosn == "a" && contrasn == "s"){
        document.getElementById('iniciarSecc').style.display = "none";
       document.getElementById('Pagina').style.display = "block"; 
    }
    
    else {
        alert("contraseña o usuario incorrecto");
    }
    }


   