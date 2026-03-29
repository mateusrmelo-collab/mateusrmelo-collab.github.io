function validarSenha() {
  const senhaCorreta = "1234"; 
  const senhaDigitada = document.getElementById("senha").value;
  const mensagemErro = document.getElementById("mensagem-erro");

  if (senhaDigitada === senhaCorreta) {
    window.location.href = "inicio.html"; 
    return false;
  } else {
    const audio = new Audio("../audio/0329.mp4"); 
    audio.play();

    mensagemErro.style.display = "block";

    document.getElementById("senha").value = "";

    return false;
  }
}

