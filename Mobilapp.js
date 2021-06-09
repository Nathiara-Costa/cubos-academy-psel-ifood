function solucao(tempo, distancia) {
	let valor = 0;
    if(tempo < 5){
        valor = 600;
       console.log(valor);
   }else if(tempo <= 60){
        valor = (100 * tempo) + (50 * distancia);
        console.log(valor);
    }else{
        let valorKm = distancia < 100 ? 200 : 150;
        console.log(valorKm * distancia);
    }

}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
} 