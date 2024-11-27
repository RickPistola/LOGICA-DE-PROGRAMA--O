alert('Boas Vindas ao jogo do número secreto');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto chute não for igual
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
    // se o chute for igual ao numero secreto
    if (numeroSecreto == chute){
        break;
    }else{
        if (chute > numeroSecreto){
            alert(`o número secreto é menor que ${chute}`);
        } else{
            alert(`o número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
if (tentativas > 1){
    alert(`isso ai! você descubriu o número ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`isso ai! você descubriu o número ${numeroSecreto} com ${tentativas} tentativa`);
}


