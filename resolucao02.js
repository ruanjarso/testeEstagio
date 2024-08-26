const produtos = [
    { sku: 1001, nome: 'Camiseta', quantidade: 5 },
    { sku: 1002, nome: 'Calça', quantidade: 10 },
    { sku: 1003, nome: 'Vestido', quantidade: 3 }
];

/*CRIAÇÃO DA FUNÇÃO*/ 
function verificarEstoque(sku,produtos) {
    const produtoExiste = produtos.find(produto => produto.sku === sku); /*verifica se o produto existe na lista*/
    if (produtoExiste && produtoExiste.quantidade > 0) {return true;} else {return false;} /*verifica se existe e se tem em estoque*/ 
}

/*VISUALIZAÇÃO*/
console.log(verificarEstoque(1003,produtos))