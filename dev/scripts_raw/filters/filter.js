/*
    Contém parte do processo de filtragem.
    Aqui, são definidas as funções para filtrar por tamanho, cor e preço.

    Também é definida uma função que filtra conteúdos com multiplos valores (multiValueFilter)

    A função principal aqui é a função "filter". Ela recebe uma lista de produtos e um "json" contendo
    as intruções para realizar esse filtro. Você pode encontrar mais sobre esse "json" em *filterOptions.js*

    Caso um critério de filtro esteja vazio, ele adiciona todos os elementos possiveis aos critérios de filtro, 
    para que o filtro seja "destivado", simplesmente deixando passar todos os itens que ele tentar filtrar.
*/

function simpleFilter(product,key,value) {
    if(product[key] == value) {
        return true
    }
}

function priceFilter(product, list_priceRange) {
    if(typeof(list_priceRange) != "object") {
        console.log("A lista de preço precisa ser passada como um array, favor, leia a documentação");
        return false
    }
    if(list_priceRange.length === 2) {
        let min_price = list_priceRange[0];
        let max_price = list_priceRange[1];
        if((product.price >= min_price) && (product.price <= max_price)) {
            return true
        }
    }
    else if(list_priceRange.length === 1) {
        let min_price = list_priceRange[0];
        if(product.price >= min_price){
            return true;
        }
    }
    else {
        console.log("Algo deu de errado, favor, ler a documentação");
    }
}

function filterProducts(products, key ,value) {
    let newList = []
    if(key != "price") {
        products.forEach( product => {if(simpleFilter(product,key,value)) newList.push(product)});
    }
    else {
        products.forEach( product => {if(priceFilter(product,value)) newList.push(product)})
    }
    return newList;
}

function multiValueFilter(products,key,values) {
    let list = []
    for(let value in values) {
        list = list.concat(filterProducts(products,key,values[value]));
    }
    return list
}

export function filter(products, filter_list) {
    let tam_list = filter_list[0];
    let color_list = filter_list[1];
    let price_list = filter_list[2]

    let allTam = ["p","m","g","gg","u","36","38","40","42","44","46"];
    let allColors = ["amarelo","azul","branco","laranja","cinza","verde","vermelho"];
    let allPrice = [[0,1000]];

    if(tam_list[1].length == 0) {
        tam_list[1] = allTam;
    }
    if(color_list[1].length == 0) {
        color_list[1] = allColors;
    }
    if(price_list[1].length == 0) {
        price_list[1] = allPrice;
    }
    
    var p;
    p = multiValueFilter(products,color_list[0],color_list[1]);
    var p1 = multiValueFilter(p,tam_list[0],tam_list[1]);
    var p2 = multiValueFilter(p1,price_list[0],price_list[1]);
    
    return p2;
}

