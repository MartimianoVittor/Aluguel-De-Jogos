function botaoClick(id) {
    alugados = verificarAlugados(id);
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let nome = game.querySelector('.dashboard__item__name');
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        devolver(imagem, botao, nome);
    } else {
        if (alugados.includes(1)) {
            alert('Você já possui um jogo alugado. Devolva-o antes de alugar outro.');
        }else{
            alugar(imagem, botao, nome);
        }
    }   
}

function verificarAlugados(id){
    let alugados =[];
    for(let i=1; i<=3; i++){
        point = document.getElementById(`game-${i}`);
        if(point.querySelector('.dashboard__item__img').classList.contains('dashboard__item__img--rented')) {
            alugados.push(1);
        }else{
            alugados.push(0);
        }
    }
    return alugados;
}

function devolver(imagem, botao, nome) {
    if(confirm(`Deseja devolver ${nome.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert(`O jogo ${nome.textContent} foi devolvido com sucesso!`);
    } else {
        return;
    }
}

function alugar(imagem, botao, nome) {
    if(confirm(`Deseja alugar ${nome.textContent}?`)) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert(`O jogo ${nome.textContent} foi alugado com sucesso!`);
    } else {
        return;
    }
}

