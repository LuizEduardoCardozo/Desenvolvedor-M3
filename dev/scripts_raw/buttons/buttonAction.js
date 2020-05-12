import {genFilters} from "../filters/filterOptions.js";
import {filter} from "../filters/filter.js";
import {cleanProducts} from "../render.js";
import {render} from "../render.js";

/*
    A função exportada é chamada por todo botão de filtro/ordenação quando é 
    clicada. Ela irá atualizar a tela, pintando todos os produtos que passarem
    pelo filtro determinado pelo usuário.

    * Funcionamento
    1- gera o JSON dos filtros
    2- filtra os produtos usando o json do passo 1, criando assim a nova vitrine
    3- limpa a vitrine anterior
    4- renderiza os produtos na tela
*/

export function buttonFilterAction(products,orderBy,mobile) {

    let filterList;

    if(mobile == "mobile"){
        filterList = genFilters("mobile");
    }else{
        filterList = genFilters();
    }
    let vitrine = filter(products,filterList);
    cleanProducts();
    render(vitrine,orderBy);
    return products;
}
