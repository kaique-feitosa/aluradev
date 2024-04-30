export function salvarProjeto() {
  const nomeProjeto = document.getElementById("nome-projeto");
  const descricaoProjeto = document.getElementById("descricao-projeto");
  const linguagem = document.getElementById("linguagens");
  const inputCor = document.getElementById("cor-linguagem");
  const codigo = document.getElementById("codigo");

  const projeto = {
    nome: nomeProjeto.value,
    descricao: descricaoProjeto.value,
    linguagem: linguagem.value,
    cor: inputCor.value,
    codigo: codigo.innerText,
    favoritado: false,
  };

  // Verifica se já existe uma lista de projetos na localStorage
  let projetos = JSON.parse(localStorage.getItem("projetos")) || [];

  projetos.push(projeto);

  // Converte a lista para uma string JSON e salva na localStorage
  localStorage.setItem("projetos", JSON.stringify(projetos));

  window.location.href = "./comunidade.html";
}
