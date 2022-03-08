let name = "Daniel";
let notaDoPrimeiroBimestre = 9.256;
let notaDoSegundoBimestre = 7.323;
let notaDoTerceiroBimestre = 4.445;
let notaDoQuartoBimestre = 2.878;

let notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre 
    + notaDoQuartoBimestre) / 4;

let notaFixada = notaFinal.toFixed(1);


    if (notaFixada > 7.0) {
        console.log("A sua nota foi " + notaFixada + " e você foi aprovado");
        
    } else {
        console.log("Estude mais! A sua nota foi " + notaFixada + " e você foi reprovado")
      
    };   
      
//console.log(notaFixada);
      




