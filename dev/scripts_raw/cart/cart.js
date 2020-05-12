/*
    Contém algumas funções necessárias para o funcionamento do carrinho de compras,
    tais como:
    searchById -> recebe uma lista de produtos e um id. Irá retornar o objeto da lista passada, que
    contém a id passada.
    addToCart -> recebe uma lista de produtos e um id. Irá adicionar ao carrinho um objeto que contém
    a id passada.
    removeFromCart -> recebe uma id, irá remover do carrinho o item que possui a id passada
    openCart -> função que irá renderizar o carrinho de compras na tela
*/

import {renderCart} from "./cartRenders.js";

var cart_list = []

function searchById(product_list,product_id) {
    return product_list.filter(i => i.id == product_id)[0];
}

export function addToCart(product_list, product_id) {
    cart_list.push(searchById(product_list,product_id));
    renderCart(cart_list);
}

export function removeFromCart(product_id) {
    cart_list = cart_list.filter(i => i.id != product_id)
    renderCart(cart_list);
}

export function openCart() {
    $(".cart").fadeToggle();
}
