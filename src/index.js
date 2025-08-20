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
  const refresh = document.createElement("button");
  refresh.textContent = "here we go again...";
  refresh.addEventListener("click", () => {
    location.reload();
  });
  refresh.style.backgroundColor = "black";
  refresh.style.color = "white";
  refresh.className = "col-6";
  darthvader.src = "darth-vader.jpeg";
  darthvader.style.width = "80%";
  const message = document.createElement("div");
  message.className = "container";
  message.textContent = "a la oscuridad regresas joven padawan";
  message.style.color = "white";
  message.style.fontSize = "2rem";
  message.style.textAlign = "center";
  message.style.marginTop = "2rem";

  body.appendChild(message);
  message.appendChild(darthvader);
  message.appendChild(refresh);
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
  const audio = new Audio("lobo.mp3");
  audio.play();
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
  }, 3500);
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
  nombre.style.fontFamily = "MS Sans Serif";

  // wait some time to check if the color is orange
  setTimeout(() => {
    if (colors[value - 1] === "orange") {
      if (!ganoMostrado) {
        ganoMostrado = true;
        mostrarPantallaGanador();
      }
    }
  }, 2000);
});

function mostrarPantallaGanador() {
  // Ocultar todo lo demás
  const termino_del_juego = document.createElement("h2");
  const aux = document.createElement("div");
  const ganador = document.createElement("button");
  const nevergonnagiveup = document.createElement("a");

  nevergonnagiveup.textContent = "Premio";
  nevergonnagiveup.style.textDecoration = "none";
  nevergonnagiveup.style.color = "black";
  nevergonnagiveup.href = "https://youtu.be/dQw4w9WgXcQ?si=WIzwfgewok9_5ANw";
  nevergonnagiveup.target = "_blank";
  aux.appendChild(ganador);
  ganador.appendChild(nevergonnagiveup);

  ganador.addEventListener("click", () => {
    //open link new tab
    window.open(nevergonnagiveup.href, "_blank");
  });

  termino_del_juego.textContent =
    "Felicidades! (Has ganado, pero a qué costo ...)";
  termino_del_juego.style.fontFamily = "MS Sans Serif";
  pop_up.style.display = "none";
  aux.className = "container justify-content-center text-center";
  termino_del_juego.style.fontSize = "2.5rem";
  termino_del_juego.className = "pb-5";
  end.appendChild(termino_del_juego);
  end.appendChild(aux);
}
