/* 
    Funçã bruta destinada a ordenar os items de uma lista, dado um critério

    Função destinada a ordenar os produtos:
        Podem ser ordenados por:
            * ID - Crescente - byId
            * ID - Decrescente - byIdReverse
            * Preço - Crescente - byPrice
            * Preço - Decrescente -byPriceReverse
*/

/* Critérios */
export function byId(a,b) {
    return a.id - b.id;
}

export function byIdReverse(a,b) {
    return b.id - a.id ;
}

export function byPrice(a,b) {
    return a.price - b.price;
}

export function byPriceReverse(a,b) {
    return b.price - a.price ;
}
/* Função destinada a ordenar os produtos */
export function sortProducts(list,criteria) {
    return list.sort(criteria);
}
