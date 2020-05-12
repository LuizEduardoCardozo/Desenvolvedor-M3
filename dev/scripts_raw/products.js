/*
    Funções importantes para os produtos

    genHTMLproductCard -> gera o código html de um card
    renderProduct -> renderiza o card html
    renderProductList -> renderiza uma lista de produtos
*/

function genHTMLproductCard(product) {
    var card =  '<div class="card-produto" id=' + product.id +  '>';
    card += '<img src="' + product.image + '" />';
    card += '<h4 class="py-1 word-spacing">' + product.name + '</h4>';
    card += '<h4 class="pb-d5 text-bold">R$' + product.price + '</h4>'
    card += '<p class="pb-d5">' + product.card_price + '</p>'
    //card += '<div class="button" value=' + product.id + '><p class="text-bold">Comprar</p></div>'
    card += '<div class="button text-bold my-auto" value=' + product.id + '>Comprar</div>'
    card += '</div>'
    return $(card)
}

function renderProduct(product) {
    let cardHtml = genHTMLproductCard(product);
    $(".container-produtos").append(cardHtml);
}

export function renderProductList(product_list) {
    product_list.forEach(product => renderProduct(product));
}

