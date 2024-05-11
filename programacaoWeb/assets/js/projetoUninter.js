botao = document.getElementById("botaoEnviar");
botao.addEventListener("click", validaFormulario);
//lógica para validar formulário
function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("mensagem").value != ""
  ) {
    alert("Prontinho!Você receberá as novidades por email!");
  } else {
    alert("Por favor, preencha os campos nome, email e mensagem!");
  }
}
