/*
    Contém funções para fazer com que elementos como "divs" possam
    se comportar como botões, ou checkboxes
*/

import {buttonFilterAction} from './buttonAction.js';

export function buttonAction(vitrine,btnHtml, c) {
    if(btnHtml.hasClass(c)) {
        btnHtml.removeClass(c);
    }else{
        btnHtml.addClass(c);
    }

    var order;

    $(".hidemenu-option-sort").each(i => {
        if($($(".hidemenu-option-sort")[i]).hasClass(c)){
            order = $($(".hidemenu-option-sort")[i]).attr("value");
        }
    });

    if (order == null){
        vitrine = buttonFilterAction(vitrine,"byId","mobile");
    } else {
        vitrine = buttonFilterAction(vitrine,order,"mobile");
    }
}

export function buttonClick(button) {
    if($(button).hasClass("btn-selected")){
        $(button).removeClass("btn-selected");
    }else{
        $(button).addClass("btn-selected");
    }
}
