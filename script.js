let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem")

botao.addEventListener("click", resposta)

function resposta(){
    mensagem.innerHTML = 'Você está apenas no início dos seus estudos. Mantenha o foco e a dedicação!'
}