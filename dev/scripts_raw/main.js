import {renderProductList} from './products.js'; 
import {buttonFilterAction} from './buttons/buttonAction.js';
import {buttonAction,buttonClick} from "./buttons/buttons.js"
import {addToCart, openCart} from './cart/cart.js'
import {cleanCart} from "./cart/cartRenders.js";

/* Main 
    Funcão principal para a execução do programa;

    Quando o site for carregado, inicialmente, todos os produtos serão
    apenas retirados do JSON e armazenados em "vitrine". Então, serão todos
    renderizados na tela

    A definição dos eventos ocorre logo em seguida, atribuindo um listener para
    cada botão. Alguns são feitos em massa, através de uma classe específica.

    Os botões da versão mobile são diferentes da versão desktop, sendo necessária uma
    definição separada, que ocorre no final da função.
*/

var vitrine;
$( function () {
    // Carregando o json com os produtos 
    var products = JSON.parse(products_json);
    vitrine = products["products"];

    // Renderiza os produtos filtrados
    renderProductList(vitrine);
    
    /* Eventos dos filtros */
    $(".filter-tam").each(i => ($($(".filter-tam")[i]).bind("click",() => buttonClick($(".filter-tam")[i]))));
    $(".btn-filter").each(i => $($(".btn-filter")[i]).bind("click", (e) => {
        var $order = $("#select-sort").val();

        if ($order == null){
            vitrine = buttonFilterAction(vitrine,"byId");
        } else {
            vitrine = buttonFilterAction(vitrine,$order);
        }
    }));
    $("#select-sort").bind("change", () => {
        console.log("vitrine global", vitrine); 
        let sortOrder = $("#select-sort").val();
        buttonFilterAction(vitrine,sortOrder)});
    // Eventos relaciondos ao carrinho de compras
    $(".cart-icon").bind("click", () => (openCart()));
    $(".button").each(i => ($($(".button")[i]).bind("click", (e) => addToCart(vitrine,$(e.target).attr("value")))));
    $("#btn-cart-cancel").bind("click",() => cleanCart());
    /* Versão mobile */
    // Eventos dos botões
    $("#btn-hide-menu-filtrar").bind("click",() => $("#container-hide-menu-filtrar").slideToggle());
    $("#btn-hide-menu-ordenar").bind("click",() => $("#container-hide-menu-ordenar").slideToggle());
    // Eventos das subcategorias do menu filtros 
    $("#btn-hide-subcat-color").each(i=> $($("#btn-hide-subcat-color")[i]).bind("click", () => $($(".hide-category")[0]).toggle("slow")));
    $("#btn-hide-subcat-tam").each(i=> $($("#btn-hide-subcat-tam")[i]).bind("click", () => $($(".hide-category")[1]).toggle("slow")));
    $("#btn-hide-subcat-price").each(i=> $($("#btn-hide-subcat-price")[i]).bind("click", () => $($(".hide-category")[2]).toggle("slow")));
    // opções dos filtros na versão mobile
    $(".btn-subcategory").each(i=> $($(".btn-subcategory")[i]).bind("click", (e) => buttonAction(vitrine,$(e.target),"category-selected")));
    $(".hidemenu-option-sort").each(i=> $($(".hidemenu-option-sort")[i]).bind("click", (e) => buttonAction(vitrine,$(e.target),"category-selected")));
});
