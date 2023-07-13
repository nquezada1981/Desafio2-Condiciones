    
function password(){
    let columna1 = document.querySelector("#primerCol").value;
    let columna2 = document.querySelector("#segundaCol").value;
    let columna3 = document.querySelector("#tercerCol").value;
    
    //Validamos//
    if (!columna1 || !columna2 || !columna3) {
      document.getElementById("resultado").innerHTML = "Valor ingresado incorrecto";
      return;
    }
    //Validamos//
    
    if (columna1 === "9" && columna2 === "1" && columna3 ==="1") {
      document.getElementById("resultado").innerHTML=
      "Password 1 es correcto";
    } else if (columna1 === "7" && columna2 === "1" && columna3 ==="4"){
      document.getElementById("resultado").innerHTML=
      "Password 2 es correcto";
    } else{
      document.getElementById("resultado").innerHTML=
      "Password Incorrecto";
    }   
}

