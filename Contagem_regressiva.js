function solucao(numero) {
	if(numero < 0)
    {
         console.log("NUMERO INVALIDO!");
    }
    else
    {
        for(var i = numero; i >= 0; i--)
        {
            console.log(i);
            if(i === 0)
            {
                console.log("KABUM");
            }
        }
    }    
}

function processData(input) {
	solucao(parseInt(input, 10));
} 