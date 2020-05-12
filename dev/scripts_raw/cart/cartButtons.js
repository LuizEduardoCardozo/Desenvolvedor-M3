/*
    Contém as funções que serão executadas pelos botões, dentro do carrinho.
*/

import {removeFromCart} from './cart.js';

export function cartButtons() {
    $(".remove-from-cart").each(i => ($($(".remove-from-cart")[i])).bind("click", (e) => removeFromCart(e.target.value)))
}