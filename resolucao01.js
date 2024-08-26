/*CRIAÇÃO DA FUNÇÃO*/
function calcularFinaciamento(valorProduto,quantidadeParcelas,taxaDeJuros) {
    const i = taxaDeJuros/100    /*transformando a taxa de juros para porcentagem*/
    const valorParcela = valorProduto/quantidadeParcelas    /*descobrindo o valor da parcela*/ 
    valorTotal = valorParcela * ((((1+i)**quantidadeParcelas) -1)/i)  /*Fórmula sendo aplicada*/ 
    return valorTotal  /*retornado o resultado*/ 
}
/*VISUALIZAÇÃO*/ 
const totalApagar = calcularFinaciamento(1000,10,2)
console.log("O valor total a ser pago é: ", totalApagar.toFixed(2)) /*toFixed(): para rertornar somente 2 casas após a vírgula*/ 

