const colorChange = document.querySelector("#color-change");

let globalColor = "red";

const keyHandler = (ev) => {
  switch (ev.key) {
    case "a": {
      globalColor = "yellow";
      colorChange.textContent = "Amarillo";
      break;
    }
    case "s": {
      globalColor = "blue";
      colorChange.textContent = "Azul";
      break;
    }
    case "d": {
      globalColor = "black";
      colorChange.textContent = "Negro";
      break;
    }
  }
};

const clickHandler = (ev) => {
  const elem = ev.target;

  elem.style.backgroundColor = globalColor;
};

const div = [
  document.querySelector("#div1"),
  document.querySelector("#div2"),
  document.querySelector("#div3"),
  document.querySelector("#div4"),
];

div.forEach((div) => {
  div.addEventListener("click", clickHandler);
});

document.addEventListener("keydown", keyHandler);
