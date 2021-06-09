function solucao(produtos) {
	let resultado = {"totalTop": 0,"percentual": 0}
    let valor_total = 0;
    
    produtos.forEach(function(produto, i) 
    {
        valor_total += produto["preco"];
        if(produto["preco"] > 10000){
            resultado["totalTop"] += produto["preco"];
           }
    });
    
    resultado["percentual"] = (resultado["totalTop"]*100)/(valor_total*100)
    console.log(resultado);
}

function processData(input) {
	solucao(JSON.parse(input));
} 