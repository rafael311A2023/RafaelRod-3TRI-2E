function criaCartao(categoria,pergunta,resposta){
    let container = document.getElementById('container')
    let article = document.createElement('article')
    article.className = 'cartao'
    article.innerHTML = `
    <div class="cartao-conteudo">
    <h3> ${categoria} </h3>
    <div class="cartao-conteudo-pergunta">
    <p>${pergunta}</p>
    </div>
    <div class="cartao-conteudo-resposta">
    <p> ${resposta}</p>
    </div>
    </div>
    
    `
    container.appendChild(article)

}

criaCartao('Biologia','Qual a função da Mitocondria?','produção de energia')
criaCartao("Português","Oque é um verbo?","É uma palavra que indica acontecimentos representados no tempo")
