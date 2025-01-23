// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Se crea la lista de amigos
let amigos = [];
//lista de numeros para no repetir amigo
let numeroLista = [];
// Esta función permite agregar los amigos
function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
    //Este if evista que se puedan agregar campos vacios
    if (amigoIngresado == ""){
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigoIngresado);
    }
        // Esta funcion limpia caja para que se puedan ingresar nuevos nombres
        limpiarCaja();
        //solo para verificar que los amigos se hallan ingresado correctamente
        console.log(amigos);
        // coloca la lista visible en el HTML
        listaAmigos()
}
// funcion que coloca la lista de amigos visible en el HTML
function listaAmigos() {

    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

      for (i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.innerText = amigos[i];
        lista.appendChild(li);
    }
}
//funcion que coloca el sorteo 
function sortearAmigo() {

    if( amigos.length === 0) {
        let results = document.getElementById("resultado");
        results.innerHTML = "Adiciona un amigo para poder sortear";
        
        } else {
        let numeroNuevo = Math.floor(Math.random()*amigos.length);
        if(numeroLista.includes(numeroNuevo)) {
            let results = document.getElementById("resultado");
            results.innerHTML = "Este amigo ja fue asignado, vuelve a sortear";
            
        } else {
            let results = document.getElementById("resultado");
            results.innerHTML = `Tu amigo secreto es: ${amigos[numeroNuevo]} `;
            
            numeroLista.push(numeroNuevo);
        }
    }
}
// Funcion que limpia la caja para colocar nombres
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}


