// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

//funcion para crear amigos
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value.trim();
  if (amigo === "") {
    alert("Debes ingresar un nombre");
    return;
  }else{
    nombres.push(amigo);
  }
  document.getElementById("amigo").value = "";
  console.log(nombres);

  actualizarLista();
}

//funcion actualizar lista de amigos

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nombres.forEach((amigo) => {
      let li = document.createElement("li");
      li.textContent = amigo;
      lista.appendChild(li);
  });
}

//funcion para sortear a los amigos

function sortearAmigo() {
  if (nombres.length === 0) {
    alert("Debes ingresar al menos un amigo para sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * nombres.length);

  // Obtener el nombre sorteado
  let amigoSorteado = nombres[indiceAleatorio];

  // Mostrar el resultado en el HTML
  let resultado = document.getElementById("amigoSorteado");
  resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
  resultado.style.display = "block";
}

