function solucao(joao, andre) {
    processaJogo(joao, andre);
}

function processaJogo(jogo_1, jogo_2){
    const _pedra= "PEDRA"
    const _papel= "PAPEL"
    const _tesoura= "TESOURA"
    
    for (var i = 1; i < 3; i++)
        {
            if((i == 1 ? jogo_1 : jogo_2) == _pedra)
                {
                    if((i == 1 ? jogo_2 : jogo_1) == _papel)
                        {console.log("ANDRE"); return false}
                    else if((i == 1 ? jogo_2 : jogo_1) == _tesoura)
                            {console.log("JOAO"); return false}
                    else if((i == 1 ? jogo_2 : jogo_1) == _pedra)
                            {console.log("EMPATE"); return false}
                }
            if((i == 1 ? jogo_1 : jogo_2) == _papel)
                {
                    if((i == 1 ? jogo_2 : jogo_1) == _papel)
                        {console.log("EMPATE"); return false}
                    else if((i == 1 ? jogo_2 : jogo_1) == _tesoura)
                            {console.log("ANDRE"); return false}
                    else if((i == 1 ? jogo_2 : jogo_1) == _pedra)
                            {console.log("JOAO"); return false}
                }
            if((i == 1 ? jogo_1 : jogo_2) == _tesoura)
                {
                    if((i == 1 ? jogo_2 : jogo_1) == _papel)
                        {console.log("JOAO"); return false}
                    else if((i == 1 ? jogo_2 : jogo_1) == _tesoura)
                            {console.log("EMPATE"); return false}
                    else if((i == 1 ? jogo_2 : jogo_1) == _pedra)
                            {console.log("ANDRE"); return false}
                }
        }
}


function processData(input) {
  const pairs = input.trim().split(" ");
  const j = pairs[0];
  const a = pairs[1];
  solucao(j, a);
} 