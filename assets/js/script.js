//Hello 1

function pintar(ele) {
  ele.style.backgroundColor = "yellow";
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", (ev) => {
  pintar(ev.target);
});

// Hello 2

function pintar2(ele, color) {
  ele.style.backgroundColor = color;
}

const ele2 = document.getElementById("ele2");
ele2.style.backgroundColor = "green";
ele2.addEventListener("click", (ev) => {
  pintar2(ev.target, "yellow");
});
