import { abrirFecharMenu } from "./abrirFecharMenu.js";
import { abrirInputPesquisar } from "./abrirInputPesquisar.js";

const botaoMenu = document.querySelector(".menu-botao");
const botaoPesquisar = document.querySelector(".pesquisar-botao");
const favorito = document.querySelector(".interacoes__reacoes");
const iconeFavoritar = document.querySelector(".fa-heart");

favorito.addEventListener("click", () => {
  iconeFavoritar.classList.toggle('fill')
});

botaoPesquisar.addEventListener("click", () => {
  abrirInputPesquisar();
});

botaoMenu.addEventListener("click", () => {
  abrirFecharMenu();
});
