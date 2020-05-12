/*
    A função exportada ordena os produtos dado um critério, depois
    os retorna;
*/

import {sortProducts,byId,byPrice,byPriceReverse} from './sort.js';

export function sortChange(products,orderBy) {
    
    let sortedProducts = []
    if(orderBy == "byId") {
        sortedProducts = sortProducts(products,byId);
    }
    else if(orderBy == "byPriceReverse") {
        sortedProducts = sortProducts(products,byPrice);
    }
    else if(orderBy == "byPrice") {
        sortedProducts = sortProducts(products,byPriceReverse);
    }
    else{
        sortedProducts = products;
        console.log("Error, opção de sort não encontrada");
    }
    return sortedProducts;
}


