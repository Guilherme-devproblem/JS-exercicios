let botao = document.getElementById("botao");
let campo1 = document.getElementById("numero1");
let campo2 = document.getElementById("numero2");
let resultado = document.getElementById("resultado");
botao.addEventListener("click", function () {
  if (campo1.value === "" || campo2.value === "") {
    resultado.textContent = "Por favor, preencha os dois números.";
    resultado.classList.add("erro");
    return;
  }
  let numero1 = Number(campo1.value);
  let numero2 = Number(campo2.value);
  let soma = numero1 + numero2;
  console.log("A soma de " + numero1 + " + " + numero2 + " é: " + soma);
  resultado.classList.remove("erro");
  resultado.textContent = numero1 + " + " + numero2 + " = " + soma;
});