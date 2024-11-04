function criarCartao(categoria, pergunta, resposta){
    let container =document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="conteudo-cartao"  onclick = function mostraResposta(card) >
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
    `
    

    container.appendChild(cartao)
}

function mostraResposta(card){
    const resposta= document.querySelector('.resposta-cartao')

    if(resposta.computedStyleMap.display === 'none'){
        resposta.computedStyleMap.display = 'block'
       
    }

    else{
        resposta.computedStyleMap.display = 'none'

    }
}


