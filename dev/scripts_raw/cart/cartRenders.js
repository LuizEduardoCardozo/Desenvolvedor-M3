/* 
    funções relevantes à renderização de itens no carrinho 
*/

import {cartButtons} from "./cartButtons.js"

function genCardProductHtml(product) {
    var card =  '<div class="container row justify-space-between shadow-bottom cart-product">';
    card += '<img src="'+ product.image +'">';
    card += '<p>' + product.name + "<br/> R$:" + product.price + " | " + product.card_price + '</p>';
    card += '<div class="my-auto"><button class="remove-from-cart btn-cart-cancel" value=' + product.id + '>Remover</button></div>';
    card += '</div>';
    return $(card)
}

function setPrice(cart_list) {
    let totalPrice = 0;
    cart_list.forEach(i => totalPrice+=i.price);
    $("#cart-total-price").text(parseFloat(totalPrice));
}

function setCartSize() {
    let size = $(".cart-product").length;
    $("#cart-itens-countr").text(size);
}

function renderAtCart(product) {
    let cardHtml = genCardProductHtml(product);
    $(".cart-container").append(cardHtml);
}

export function renderListCart(product_list) {
    product_list.forEach(product => {product = product; renderAtCart(product)});
}

export function renderCart(product_list) {
    cleanCart();
    renderListCart(product_list);
    cartButtons();
    setCartSize();
    setPrice(product_list);
}

export function cleanCart() {
    let $productList = $('.cart-product')
    $productList.each(i => $productList[i].remove());
}

