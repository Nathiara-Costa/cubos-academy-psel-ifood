function solucao(precos) {
    let total_a_pagar = 0;
    let qtde_produtos = precos.length;
    let menor_preco = Math.min.apply(Math, precos);
    
    for(let i = 0; i < qtde_produtos; i++){
        total_a_pagar += precos[i];
    }
    
    qtde_produtos >= 5 ? console.log(total_a_pagar - menor_preco) : console.log(total_a_pagar);
    
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
}
