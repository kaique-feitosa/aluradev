import { aplicaHighlight } from "./aplicaHighlight.js";
import { abrirFecharMenu } from "./abrirFecharMenu.js";

const botaoHighlight = document.querySelector(".botao-highlight");
const borda = document.querySelector(".editor__container");
const inputCor = document.getElementById("cor-linguagem");
const botaoMenu = document.querySelector(".menu-botao");

botaoMenu.addEventListener("click", () => {
  abrirFecharMenu();
});

inputCor.addEventListener("input", () => {
  mudarCorDaBorda();
});

botaoHighlight.addEventListener("click", () => {
  aplicaHighlight();
});

function mudarCorDaBorda() {
  borda.style.borderColor = inputCor.value;
}
