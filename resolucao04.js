const itensVendidos = [
    { sku: 1001, quantidade: 2 },
    { sku: 1002, quantidade: 1 },
    { sku: 1003, quantidade: 5 }
];

const estoque = [
    { sku: 1001, quantidade: 5 },
    { sku: 1002, quantidade: 2 },
    { sku: 1003, quantidade: 5 }
];

/*CRIAÇÃO DA FUNÇÃO*/ 
function atualizarEstoque(itensVendidos,estoque) {
    itensVendidos.forEach(itemVendido => { /*percorre a lista*/ 
        const produtoEmEstoque = estoque.find(produto => produto.sku === itemVendido.sku)  /*verifica se o produto existe em estoque*/  
        if (produtoEmEstoque) {
            produtoEmEstoque.quantidade -= itemVendido.quantidade /*subtrai o produto vendido do estoque*/ 
        }
    })
    return estoque
}

/*VISUALIÇÃO*/
console.log(atualizarEstoque(itensVendidos,estoque))