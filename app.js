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

//funcion actualizar lista de amigos

function actualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  nombres.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

//funcion para sortear a los amigos
