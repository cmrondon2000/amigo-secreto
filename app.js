// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado == null){
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(amigoIngresado);
    }

}


function sortearAmigo() {
    
}