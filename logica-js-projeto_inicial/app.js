alert('Boas Vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

// se o chute for igual ao numero secreto
if (numeroSecreto == chute){
    alert(`isso ai! você descubriu o número ${numeroSecreto}`);
}else{
    alert('você errou')
}