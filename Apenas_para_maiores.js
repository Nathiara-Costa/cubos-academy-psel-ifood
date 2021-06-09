function solucao(idade) {
    if(idade < 0){
      console.log("IDADE INVALIDA");
    }
    else if(idade < 18)
    {
      console.log("ACESSO NEGADO");          
    }
    else if(idade >= 18)
    {
      console.log("PODE ENTRAR");          
    }

}

function processData(input) {
    solucao(parseInt(input.trim(), 10));
} 