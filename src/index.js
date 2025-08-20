// ???
const element1 = document.getElementById("1");
const element2 = document.getElementById("2");
const element3 = document.getElementById("3");
const element4 = document.getElementById("4");
const white_walter = document.getElementById("white");

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
  }, 1500);
  setTimeout(() => {
    white_walter.style.width = "auto";
    white_walter.style.height = "auto";
    white_walter.style.margin = "3rem";
    white_walter.src = "lobito.jpeg";
  }, 3000);
});
