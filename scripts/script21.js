const nome = document.querySelector("#txtNome");
const nomePlacar = document.querySelector("#nomePlacar");
const nomeCards = document.querySelector("#nomeP1");
const btnComecar = document.querySelector("#btnNovoJogo");

const cards = [];
const numSorteado = document.querySelector(".numSorteados")
function iniciarJogo() {
    alert (nome.value);
    //Inserindo o nome nos campos necessários
    if (nome.value == ""){
        nomePlacar.innerHTML = "Player";
        nomeCards.innerHTML = "Player";
    } else {
        nomePlacar.innerHTML = nome.value;
        nomeCards.innerHTML = nome.value;
    }
    
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
    //Mostrando os 20 cards aleatorios
    for (var i=0; i<20; i++){
        numSorteado.textContent = `${numSorteado.textContent} - ${cards[i]}`;
    }
    
   //const indexCard = Math.floor(Math.random() * 40) + 1;
   //alert(indexCard.toString());
   if (indexCard.toString().length == 2){  
        alert (`Você tirou ${indexCard.toString().charAt(1)} pontos`)
   } else {
        alert (`Você tirou ${indexCard.toString()} pontos`)
   }
}

btnComecar.addEventListener("click", iniciarJogo);
