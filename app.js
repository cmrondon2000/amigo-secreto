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
        limpiarListaAmigos();
        console.log(amigos);
        listaAmigos()

}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");
    for (i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.innerText = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    
}

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

function limpiarListaAmigos (){
    
}
   