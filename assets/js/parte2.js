
function verificar(){
    let github = document.getElementById("github").value;
    let slack = document.getElementById("slack").value;
    let git = document.getElementById("git").value;


    if (github < 0 || github > 10 || slack < 0 || slack > 10 || git < 0 || git > 10) {
      document.getElementById("resultado").innerHTML = "Valor ingresado invalido! Ingresar un valor entre 0 y 10";
      return;
  }    
      

    let resultado = Number(github) + Number(slack) + Number(git);
    
    if (resultado <= 10) {
        document.getElementById("resultado").innerHTML=
        "Llevas " + resultado + " stickers"
        resultado;
    
    } else {
      document.getElementById("resultado").innerHTML=
        "Llevas demasiados stickers";
    }
}


