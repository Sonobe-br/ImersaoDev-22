function Converter() {

    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);
    //console.log ("Moeda Convertida");

    let valorEmReal = (valorEmDolarNumerico * 5).toFixed(2);
    console.log(valorEmReal);

    let elementoIdConvertido = document.getElementById("valorConvertido");
    let valorConvertido = 'O resultado do produto em real é ' + valorEmReal;
    
    elementoIdConvertido.innerHTML = valorConvertido; 

}