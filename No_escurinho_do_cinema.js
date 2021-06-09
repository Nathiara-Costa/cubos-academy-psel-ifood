function solucao(obj) {
	if(obj["temIngresso"])
    {
        if(obj["idade"] >= obj["censura"])
        {
            AnalisaIngresso(obj);
        }
        else if(obj["estaComPais"])
        {
            AnalisaIngresso(obj)
        }
        else
        {
            console.log("ACESSO NEGADO");
        }
    }
    else{
        console.log("ACESSO NEGADO");
    }
}
function AnalisaIngresso(obj){
    if(obj["temCarteirinha"] === true || obj["idade"] < 18)
   {
       console.log("MEIA");
   }
    else{
        console.log("INTEIRA");
    }
}

function processData(input) {
    solucao(JSON.parse(input));
} 
