let botao = document.getElementById("botao");
let campoNome = document.getElementById("nome");
let resultado = document.getElementById("resultado");
botao.addEventListener("click", function () {
  let nome = campoNome.value.trim();
  if (nome === "") {
    resultado.textContent = "Por favor, digite seu nome.";
    resultado.classList.add("erro");
    return;
  }
  let mensagem = "Meu nome é " + nome;
  console.log(mensagem);
  resultado.classList.remove("erro");
  resultado.textContent = mensagem;
});