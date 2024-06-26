import { aplicaHighlight } from "./aplicaHighlight.js";
import { abrirFecharMenu } from "./abrirFecharMenu.js";
import { abrirInputPesquisar } from "./abrirInputPesquisar.js";
import { salvarProjeto } from "./salvarProjeto.js";

const botaoHighlight = document.querySelector(".botao-highlight");
const borda = document.querySelector("#editor-container");
const inputCor = document.getElementById("cor-linguagem");
const botaoMenu = document.querySelector(".menu-botao");
const botaoPesquisar = document.querySelector(".pesquisar-botao");
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  salvarProjeto();
});

botaoPesquisar.addEventListener("click", () => {
  abrirInputPesquisar();
});

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
