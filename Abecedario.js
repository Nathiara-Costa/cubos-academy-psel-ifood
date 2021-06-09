function solucao(letra, palavras) {
	let qtde_perderam = 0;
    
    palavras.forEach(function(palavra, i) 
    {
        if(palavra.substring(0,1) !==  letra){
            qtde_perderam++;
           }
    });
    
    console.log(qtde_perderam);
    
}

function processData(input) {
	const {letra, palavras} = JSON.parse(input)[0];
    solucao(letra, palavras);
} 
