// ???
const element1 = document.getElementById("1");
const element2 = document.getElementById("2");
const element3 = document.getElementById("3");
const element4 = document.getElementById("4");
const white_walter = document.getElementById("white");
const pop_up = document.getElementById("after");
const center = document.getElementById("center");
const slider = document.getElementById("range25");
const nombre_mostrar = document.getElementById("nombre_mostrar");
const nombre = document.getElementById("nombre");
const ventana = document.getElementById("pop-up");
const ventana_close = document.getElementById("ventana-close");
const window_s = document.getElementById("window");
const fin = document.getElementById("fin");
const foo = document.getElementById("foo");
const end = document.getElementById("end");

let ganoMostrado = false;
let alertTimeout;

const names = [
  "Aureliano",
  "Georgina",
  "Buendía",
  "Panchita",
  "Melquiades",
  "Esperanza (no tengo)",
  "Maldia",
  "Carlitos",
  "Eustaquio",
  "Fulgencio",
  "Rogelio",
  "Dolores (si tengo)",
];

fin.addEventListener("click", () => {
  window_s.style.display = "none";
  foo.style.display = "none";
  const body = document.body;
  body.style.backgroundImage = "none";
  body.style.backgroundColor = "black";

  // poner mensaje que dice que perdio ...
  const darthvader = document.createElement("img");
  darthvader.src = "darth-vader.jpeg";
  darthvader.style.width = "80%";
  const message = document.createElement("div");
  message.className = "container";
  message.textContent = "a la oscuridad regresas joven padawan";
  message.style.color = "white";
  message.style.fontSize = "2rem";
  message.style.textAlign = "center";
  body.appendChild(message);
  message.appendChild(darthvader);
});

element1.addEventListener("click", () => {
  element2.style.display = "block";
});

element2.addEventListener("click", () => {
  element3.style.display = "block";
});

element3.addEventListener("click", () => {
  element4.style.display = "block";
});

element4.addEventListener("click", () => {
  setTimeout(() => {
    white_walter.src = "waiting.gif";
  }, 300);
  setTimeout(() => {
    white_walter.style.width = "auto";
    white_walter.style.height = "auto";
    white_walter.style.margin = "3rem";
    white_walter.src = "lobito.jpeg";
  }, 1500);
});
white_walter.addEventListener("click", () => {
  setTimeout(() => {
    element1.style.display = "none";
    element2.style.display = "none";
    element3.style.display = "none";
    element4.style.display = "none";
    white_walter.style.display = "none";
    center.className = "";
    ventana.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.5)";
    pop_up.style.display = "flex";
    pop_up.style.zIndex = "5";
  }, 500);
});

let alertShown = false;

ventana_close.addEventListener("click", () => {
  ventana.style.display = "none";
});

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "cyan",
  "purple",
  "pink",
  "darkred",
  "brown",
  "darkblue",
  "black",
  "orange",
];

slider.addEventListener("input", () => {
  const value = parseInt(slider.value);
  nombre.textContent = `${names[value - 1]}`;
  nombre.style.color = colors[value - 1] || "black";
  nombre.style.fontStyle = "bold";
  nombre.style.fontSize = "0.7rem";
  nombre.style.fontFamily = "monospace";

  if (colors[value - 1] === "orange") {
    if (!ganoMostrado) {
      ganoMostrado = true;
      mostrarPantallaGanador();
    }
  }
});

function mostrarPantallaGanador() {
  // Ocultar todo lo demás
  const termino_del_juego = document.createElement("h2");
  const ganador = document.createElement("button");
  const nevergonnagiveup = document.createElement("a");
  nevergonnagiveup.textContent = "Premio";
  nevergonnagiveup.href = "https://youtu.be/dQw4w9WgXcQ?si=WIzwfgewok9_5ANw";
  ganador.appendChild(nevergonnagiveup);
  termino_del_juego.textContent =
    "Felicidades! (Has ganado, pero a qué costo ...)";
  pop_up.style.display = "none";
  termino_del_juego.style.fontSize = "4rem";
  end.appendChild(termino_del_juego);
  end.appendChild(ganador);
}
