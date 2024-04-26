const iconeBotao = document.querySelector(".icone-menu");
const conteudoDaPagina = document.querySelector("main");
const menu = document.querySelector(".menu__lista");

export function abrirFecharMenu() {
  if (iconeBotao.textContent == " menu ") {
    iconeBotao.textContent = " close ";
    conteudoDaPagina.classList.toggle("hidden");
    menu.style.transition = "opacity 0.5s ease-in-out";
    menu.classList.toggle("flex");
    setTimeout(() => {
      menu.style.opacity = 1;
    }, 50);
  } else {
    iconeBotao.textContent = " menu ";
    conteudoDaPagina.classList.toggle("hidden");
    menu.style.transition = "opacity 0.5s ease-in-out";
    menu.style.opacity = 0;
    menu.classList.toggle("flex");
  }
}
