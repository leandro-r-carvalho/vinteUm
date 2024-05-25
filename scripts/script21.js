const nome = document.querySelector("#txtNome");
const nomePlacar = document.querySelector("#nomePlacar");
const nomeCards = document.querySelector("#nomeP1");
const btnComecar = document.querySelector("#btnNovoJogo");

const cards = [];
const cardsP1 = [];
const cardsC1 = [];
const numSorteado = document.querySelector(".numSorteados");
const numP1 = document.querySelector(".numP1");
const numC1 = document.querySelector(".numC1");

//Importando todas as divs - P1
const cardP1_1 = document.getElementById("cardP1_1");
const cardP1_2 = document.getElementById("cardP1_2");
const cardP1_3 = document.getElementById("cardP1_3");
const cardP1_4 = document.getElementById("cardP1_4");
const cardP1_5 = document.getElementById("cardP1_5");
const cardP1_6 = document.getElementById("cardP1_6");
const cardP1_7 = document.getElementById("cardP1_7");
const cardP1_8 = document.getElementById("cardP1_8");
const cardP1_9 = document.getElementById("cardP1_9");
const cardP1_10 = document.getElementById("cardP1_10");
//Importando todas as divs - C1
const cardC1_1 = document.getElementById("cardC1_1");
const cardC1_2 = document.getElementById("cardC1_2");
const cardC1_3 = document.getElementById("cardC1_3");
const cardC1_4 = document.getElementById("cardC1_4");
const cardC1_5 = document.getElementById("cardC1_5");
const cardC1_6 = document.getElementById("cardC1_6");
const cardC1_7 = document.getElementById("cardC1_7");
const cardC1_8 = document.getElementById("cardC1_8");
const cardC1_9 = document.getElementById("cardC1_9");
const cardC1_10 = document.getElementById("cardC1_10");

//Divs do placar
const p1 = document.getElementById("p1");
const c1 = document.getElementById("c1");
//Numeros de cards
var NumCards = 2;
//Verificar parar
var _parar = false;

//Vencedor
const nomeVencedor = document.getElementById("nomeVencedor");
function verificarVencedor(placar1, placar2){
    if (placar1 > 21 && placar2 > 21){
        nomeVencedor.innerHTML = `Ninguem venceu a partida...`;
    } else {
        if (placar1 == 21 || placar2 > 21){
            nomeVencedor.innerHTML = `${nome.value} venceu com ${placar1} pontos`;
        }
        if (placar2 == 21 || placar1 > 21){
            nomeVencedor.innerHTML = `Computador venceu com ${placar2} pontos`;
        }
    }  
}

function atualizarPlacar(num, parar) {
    if (!parar){
        //Váriaveis do placar
        var placarGerarlP1 = 0;
        var placarGerarlC1 = 0;
        for (var i=0; i < num; i++){
            placarGerarlP1 = placarGerarlP1 + Number(qtdePontos(cardsP1[i]));
            placarGerarlC1 = placarGerarlC1 + Number(qtdePontos(cardsC1[i]));
        }
        p1.textContent = `${placarGerarlP1}`;
        c1.textContent = `${placarGerarlC1}`;
    } else {
        //Váriaveis do placar
        var placarGerarlP1 = 0;
        var placarGerarlC1 = 0;
        for (var i=0; i < num-1; i++){
            placarGerarlP1 = placarGerarlP1 + Number(qtdePontos(cardsP1[i]));
            placarGerarlC1 = placarGerarlC1 + Number(qtdePontos(cardsC1[i]));
        }
        p1.textContent = `${placarGerarlP1}`;
        placarGerarlC1 = placarGerarlC1 + Number(qtdePontos(cardsC1[num]));
        c1.textContent = `${placarGerarlC1}`;
    }
    
    //Verificar vencedor
    verificarVencedor(placarGerarlP1, placarGerarlC1);
}

function qtdePontos(num){
    //alert(indexCard.toString());
    if (num.toString().length == 2){ 
        if (num.toString() == "10" || num.toString() == "20" || num.toString() == "30" || num.toString() == "40") {
            return 10;
        } else {
            return num.toString().charAt(1);
        }  
    } else {
        return num.toString();
    }
}

function virar2CardsIniciais(){
    //Mostrando os primeiros 4 cards
    cardP1_1.textContent = qtdePontos(cardsP1[0]);
    cardC1_1.textContent = qtdePontos(cardsC1[0]);
    cardP1_2.textContent = qtdePontos(cardsP1[1]);
    cardC1_2.textContent = qtdePontos(cardsC1[1]);
    
    //Atualizar o placar
    atualizarPlacar(NumCards, _parar);
}

function gerarCards() {
    /*
        Ideia gerar cards até 40
        1 - 11 -21 -31 (1 ponto)
        2 - 12 - 22- 32 (2 pontos)
        ...
        10 - 20 - 30 - 40 (10 pontos)
        */
    //Gerando 20 cards aleatorios e não repetidos
    while (cards.length < 20){
        const indexCard = Math.floor(Math.random() * 40) + 1;
        if(!cards.includes(indexCard)) {
            cards.push(indexCard)
        } 
    }

    //Populando 2 arrays separados para cada player 
    for (var i=0; i<20; i++){
        numSorteado.textContent = `${numSorteado.textContent} - ${cards[i]}`;
        if (i % 2){
            cardsC1.push(cards[i]);
        } else {
            cardsP1.push(cards[i]);
        }
    }

    //Mostrando os 20 cards aleatorios - Dividindo para os dois players
    for (var i=0; i<10; i++){
            numC1.textContent = `${numC1.textContent} - ${cardsC1[i]}`;
            numP1.textContent = `${numP1.textContent} - ${cardsP1[i]}`;
    }
}

function novoJogo(){
    //Limpando os nomes
    nomePlacar.innerHTML = "Player";
    nomeCards.innerHTML = "Player";
    //nome.value = ""
    //Limpando os cards
    cardP1_1.textContent = "";
    cardC1_1.textContent = "";
    cardP1_2.textContent = "";
    cardC1_2.textContent = "";
    cardP1_3.textContent = "";
    cardC1_3.textContent = "";
    cardP1_4.textContent = "";
    cardC1_4.textContent = "";
    cardP1_5.textContent = "";
    cardC1_5.textContent = "";
    cardP1_6.textContent = "";
    cardC1_6.textContent = "";
    cardP1_7.textContent = "";
    cardC1_7.textContent = "";
    cardP1_8.textContent = "";
    cardC1_9.textContent = "";
    cardP1_9.textContent = "";
    cardC1_10.textContent = "";
    cardP1_10.textContent = "";
    //Limpando os placares
    p1.textContent = 0;
    c1.textContent = 0;
    //Limpando variaveis
    NumCards = 2;
    //Limpando os arrays
    while(cards.length) {
        cards.pop();
    }
    while(cardsP1.length) {
        cardsP1.pop();
    }
    while(cardsC1.length) {
        cardsC1.pop();
    }
    //Limpar campos com variaveis
    numSorteado.textContent = "";
    numP1.textContent = "";
    numC1.textContent = "";
    //Limpar vencedor
    nomeVencedor.innerHTML ="";
}

function iniciarJogo() {
    //Limpando todos os campos
    novoJogo();
    //numSorteado = document.querySelector(".numSorteados");
    //numP1 = document.querySelector(".numP1");
    //numC1 = document.querySelector(".numC1");
    //Inserindo o nome nos campos necessários
    if (nome.value == ""){
        alert ("Por favor digite o seu nome!")
        nomePlacar.innerHTML = "Player";
        nomeCards.innerHTML = "Player";
    } else {
        nomePlacar.innerHTML = nome.value;
        nomeCards.innerHTML = nome.value;
        gerarCards();
        virar2CardsIniciais();
    }      
}

btnComecar.addEventListener("click", iniciarJogo);

const btnComprar = document.getElementById("btnComprar");

function comprarCard() {
    NumCards++;
    switch(NumCards) {
        case 3:
            cardP1_3.textContent = qtdePontos(cardsP1[2]);
            cardC1_3.textContent = qtdePontos(cardsC1[2]);
            break;
        case 4:
            cardP1_4.textContent = qtdePontos(cardsP1[3]);
            cardC1_4.textContent = qtdePontos(cardsC1[3]);
            break;
        case 5:
            cardP1_5.textContent = qtdePontos(cardsP1[4]);
            cardC1_5.textContent = qtdePontos(cardsC1[4]);
            break;
        case 6:
            cardP1_6.textContent = qtdePontos(cardsP1[5]);
            cardC1_6.textContent = qtdePontos(cardsC1[5]);
            break;
        case 7:
            cardP1_7.textContent = qtdePontos(cardsP1[6]);
            cardC1_7.textContent = qtdePontos(cardsC1[6]);
            break;
        case 8:
            cardP1_8.textContent = qtdePontos(cardsP1[7]);
            cardC1_8.textContent = qtdePontos(cardsC1[7]);
            break;
        case 9:
            cardP1_9.textContent = qtdePontos(cardsP1[8]);
            cardC1_9.textContent = qtdePontos(cardsC1[8]);
            break;
        case 10:
            cardP1_10.textContent = qtdePontos(cardsP1[9]);
            cardC1_10.textContent = qtdePontos(cardsC1[9]);
            break;
        default:
            alert("Cards indisponiveis...");
            
    }
    atualizarPlacar(NumCards, _parar);
}

btnComprar.addEventListener("click", comprarCard);

const btnParar = document.getElementById("btnParar");

function parar() {
    NumCards++;
    switch(NumCards) {
        case 3:
            cardC1_3.textContent = qtdePontos(cardsC1[2]);
            break;
        case 4:
            cardC1_4.textContent = qtdePontos(cardsC1[3]);
            break;
        case 5:
            cardC1_5.textContent = qtdePontos(cardsC1[4]);
            break;
        case 6:
            cardC1_6.textContent = qtdePontos(cardsC1[5]);
            break;
        case 7:
            cardC1_7.textContent = qtdePontos(cardsC1[6]);
            break;
        case 8:
            cardC1_8.textContent = qtdePontos(cardsC1[7]);
            break;
        case 9:
            cardC1_9.textContent = qtdePontos(cardsC1[8]);
            break;
        case 10:
            cardC1_10.textContent = qtdePontos(cardsC1[9]);
            break;
        default:
            alert("Cards indisponiveis...");
            
    }
    _parar = true;
    atualizarPlacar(NumCards, _parar);
}
btnParar.addEventListener ("click", parar)