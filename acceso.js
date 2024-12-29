
function AcederPic(){
    var iniciar = document.getElementById('iniciarSecc').value;
     var usuario = document.getElementById('Usuario').value;
     var contra = document.getElementById('Contrasena').value;
      
    
    
    
    
    if(usuario == "a" && contra == "s"){
        document.getElementById('iniciarSecc').style.display = "none";
       document.getElementById('Pagina').style.display = "block"; 
    }
    
    else {
        alert("contraseña o usuario incorrecto");
    }
    }



    function crearUsuario(){
      document.getElementById('crearusu').value


              
    }