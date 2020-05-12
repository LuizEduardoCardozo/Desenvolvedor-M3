import {addToCart} from "./cart/cart.js";

/*  
    Algumas funções importantes para a renderização dos produtos
   na tela
  
   render -> renderizar um produto na tela, dado uma lista de produtos
   e uma ordem ("byId", "byPrice", "byPriceReverse")
  
   cleanProducts -> limpa todos os produtos da tela
 */

import {sortChange} from "./filters/sortAction.js";
import {renderProductList} from './products.js'

export function render(products,orderBy) {
    let sortedProducts = sortChange(products,orderBy)
    cleanProducts();
    renderProductList(sortedProducts);
    $(".button").each(i => ($($(".button")[i]).bind("click", (e) => addToCart(products,$(e.target).attr("value")))));
}

export function cleanProducts() {
    let $productList = $('.card-produto')
    $productList.each(i => $productList[i].remove());
}
