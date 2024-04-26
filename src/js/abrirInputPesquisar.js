const iconePesquisar = document.querySelector(".pesquisar-icone");
const inputPesquisar = document.getElementById("pesquisar");
const logo = document.querySelector(".logo");
const botaoMenu = document.querySelector(".menu-botao");

export function abrirInputPesquisar() {
  if (window.innerWidth < 768) {
    logo.classList.toggle("hidden");
    botaoMenu.classList.toggle("hidden");
    if (iconePesquisar.textContent == " search ") {
      inputPesquisar.style.display = "block";
      iconePesquisar.style.marginRight = '0em';
      iconePesquisar.textContent = " close ";
    } else {
      inputPesquisar.style.display = "none";
      iconePesquisar.style.marginRight = '0.7em';
      iconePesquisar.textContent = " search ";
    }
  }
}
