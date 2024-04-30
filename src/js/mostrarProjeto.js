import { favoritar } from "./favoritar.js";

const containerDeProjetos = document.querySelector(".projetos");

function carregarProjetos() {
  const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
  return projetos;
}

export function mostrarProjetos() {
  let projetos = carregarProjetos();
  projetos.forEach((projeto) => {
    containerDeProjetos.innerHTML += `
        <div class="projeto">
              <div class="projeto__codigo" style="border-color: ${projeto.cor}">
                <div class="projeto__codigo__conteudo">
                  <img src="./src/img/mac-buttons.svg" alt="" class="mac-buttons" />
                  <code id="codigo-pronto" class="editor__box hljs ${projeto.linguagem}">${projeto.codigo}</code>
                </div>
              </div>
              <div class="projeto__postagem">
                <div class="projeto__infos">
                  <h3 class="projeto__infos__titulo">${projeto.nome}</h3>
                  <p class="projeto__infos__descricao">${projeto.descricao}</p>
                </div>
                <div class="projeto__interacoes">
                  <div class="interacoes">
                    <div class="interacoes__comentarios">
                      <i class="fa-solid fa-comment"></i>
                      <span class="interacoes__comentarios__numeros">9</span>
                    </div>
                    <div class="interacoes__reacoes">
                      <i class="fa-solid fa-heart"></i>
                      <span class="interacoes__reacoes__numeros">9</span>
                    </div>
                  </div>
                  <div class="usuario">
                    <img
                      src="./src/img/foto-login.png"
                      alt="Foto de perfil do usuário"
                      class="usuario__foto"
                    />
                    <span class="usuario__nome">@Harry</span>
                  </div>
                </div>
              </div>
        </div>
    `;
    favoritar();
  });
}
