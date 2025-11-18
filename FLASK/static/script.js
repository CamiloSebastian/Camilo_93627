function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const elixir = document.getElementById("elixir").value;
  const raridade = document.getElementById("raridade").value;

  if (nome === "" || preco === "" || quantidade === "") {
    alert("Por favor, preencha todos os campos!");
    return false;
  }
  return true;
}