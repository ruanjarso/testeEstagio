// Tabela de preços
const tabelaPrecos = {
    '0-1,0-5': 10.0,    // Até 1 kg e até 5 km: R$ 10.00
    '0-1,6-10': 15.0,   // Até 1 kg e 6-10 km: R$ 15.00
    '1-5,0-5': 20.0,    // 1-5 kg e até 5 km: R$ 20.00
    '1-5,6-10': 25.0,   // 1-5 kg e 6-10 km: R$ 25.00
    '5-10,0-5': 30.0,   // 5-10 kg e até 5 km: R$ 30.00
    '5-10,6-10': 35.0   // 5-10 kg e 6-10 km: R$ 35.00
};

/*CRIAÇÃO DA FUNÇÃO*/ 
function calculaFrete(peso, distancia, tabelaPrecos) {
    //VERIFICANDO A FAIXA DE PESO
    if(peso <= 1) {faixaPeso = '0-1'}
    else if(peso > 1 && peso <= 5 ) {faixaPeso = '1-5'}
    else if(peso > 4 && peso <= 10) {faixaPeso = '5-10'}
    else { return "peso inválido!"}

    //VERIFICANDO A FAIXA DE DISTÂNCIA
    if (distancia <= 5) { faixaDistancia = '0-5'}
    else if (distancia > 5 && distancia <= 10 ) { faixaDistancia = '6-10'}
    else {return "distância inválida!"}

    const chave = `${faixaPeso},${faixaDistancia}`
    return valorFrete = tabelaPrecos[chave]
}

/*VISUALIZAÇÃO*/
valor = calculaFrete(9,6,tabelaPrecos)
console.log("o valor do frete é: ",valor)