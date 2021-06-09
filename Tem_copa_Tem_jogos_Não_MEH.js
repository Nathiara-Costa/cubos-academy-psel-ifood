function solucao(ano) {
	let ultima_copa = 2018;
    let ultima_olimpiada = 2020;
    
    if((ano - ultima_copa) % 4 == 0){
        console.log("COPA");
    }else if((ano - ultima_olimpiada) % 4 == 0){
        console.log("JOGOS");
    }else{
        console.log("MEH");
    }
}

function processData(input) {
	solucao(parseInt(input, 10));
} 