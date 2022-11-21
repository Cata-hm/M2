const agregar = document.querySelector("#agregar");

const contenedor = document.querySelector("#contenedor");

function cambiarColor(event) {
  const elemento = event.target;
  if (elemento.className === "recuadro") {
    elemento.className = "recuadroRojo";
  } else {
    elemento.className = "recuadro";
  }
}

function clickHandler() {
  const newDiv = document.createElement("div");
  newDiv.innerText = "Hola!!";
  newDiv.className = "recuadro";
  newDiv.addEventListener("click", cambiarColor);

  contenedor.appendChild(newDiv);
}

agregar.addEventListener("click", clickHandler);
