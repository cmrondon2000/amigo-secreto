// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado == ""){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigoIngresado);
    }

    limpiarCaja();
    console.log(amigos);

}


function sortearAmigo() {
    
}

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}