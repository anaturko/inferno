function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = ` 
    <div class= "cartao-conteudo" onclick= "mostrarRespota(this)">
    <h3> ${categoria}</h3>
    <div class= "cartao-pergunta">
    <p> ${pergunta}</p>
    </div>
    <div class= "cartao-resosta">{
    <p> ${resposta}</p>
    </div>
    </div>
  `

    container.appendChild(cartao);
}

function mostrarRespota(card) {
    const respota = card.querySelector('.cartao-resosta')
    if (respota.style.display === 'none') {
        respota.style.display = 'block';
    }
    else {
        respota.style.display = 'none'
    }
}