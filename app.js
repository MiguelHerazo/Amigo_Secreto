// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

//funcion para crear amigos
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo === "") {
    alert("Debes ingresar un nombre");
    return;
  }else{
    nombres.push(amigo);
  }
  document.getElementById("amigo").value = "";
  console.log(nombres);
}

