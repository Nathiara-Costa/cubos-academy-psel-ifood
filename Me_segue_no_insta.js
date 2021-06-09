function solucao(largura, altura) {
    if(largura < 0 || altura < 0){
          console.log("IMAGEM INVALIDA");
       }else if(altura > largura){
                console.log("RETRATO");
                }else if(altura < largura){
                console.log("PAISAGEM");
                }else if(altura == largura){
                console.log("QUADRADA");
                }
    
  }
  
  function processData(input) {
      const x = input.trim().split(" ");
        solucao(parseInt(x[0], 10), parseInt(x[1], 10));
  } 
  