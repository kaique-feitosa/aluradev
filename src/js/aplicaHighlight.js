const linguagem = document.getElementById("linguagens");
const areaDoCodigo = document.getElementById("codigo");

export function aplicaHighlight() {
  const codigo = areaDoCodigo.innerText;
  areaDoCodigo.innerHTML = `
    <code id="codigo" class="editor__box hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>
    `;
  areaDoCodigo.querySelector("code").textContent = codigo;
  hljs.highlightElement(areaDoCodigo.querySelector("code"));
}