import { abrirFecharMenu } from "./abrirFecharMenu.js";
import { abrirInputPesquisar } from "./abrirInputPesquisar.js";
import { mostrarProjetos } from "./mostrarProjeto.js";

const botaoMenu = document.querySelector(".menu-botao");
const botaoPesquisar = document.getElementById("pesquisar-botao");

window.addEventListener("DOMContentLoaded", () => {
  mostrarProjetos();
});

botaoPesquisar.addEventListener("click", () => {
  abrirInputPesquisar();
});

botaoMenu.addEventListener("click", () => {
  abrirFecharMenu();
});

