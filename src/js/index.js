import { aplicaHighlight } from "./aplicaHighlight.js";

const botaoHighlight = document.querySelector(".botao-highlight");
const borda = document.querySelector(".editor__container");
const inputCor = document.getElementById("cor-linguagem");

inputCor.addEventListener("input", () => {
  mudarCorDaBorda();
});

botaoHighlight.addEventListener("click", () => {
  aplicaHighlight();
});

function mudarCorDaBorda() {
  borda.style.borderColor = inputCor.value;
}
