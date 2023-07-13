
function borde(){
    const border = document.getElementById("borde");

    if (border.style.border == "3px solid red") {
        border.style.border = "none";
    } else {
        border.style.border = "3px solid red";
    }
}