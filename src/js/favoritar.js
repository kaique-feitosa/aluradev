export function favoritar() {
  document.querySelectorAll(".fa-heart").forEach(function (coracao) {
    coracao.addEventListener("click", function () {
      // Mudar a cor do ícone para a cor da classe fill
      coracao.classList.toggle("fill");

      // Verificar se o projeto está sendo favoritado ou não
      let favoritado = coracao.classList.contains("fill");

      // Obter o projeto relacionado ao ícone de coração clicado
      let projeto = coracao.closest(".projeto");

      // Obtendo o ID do projeto (você pode adicionar um ID único para cada projeto)
      let projetoID = projeto.dataset.id;

      // Salvando o estado de favorito na localStorage
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
      favoritos[projetoID] = favoritado;
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });
  });
}
