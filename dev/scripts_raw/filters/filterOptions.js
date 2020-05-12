/*
    Gera o "JSON" com todos os filtros para ser usada na função "filter" (em filter.js)
    Formato:
        ["propriedade",["chave1","chave2"]]
        ex:
            [["cor",["azul","vermelho"]],["tam",["p","gg"]],["price",[[50,100]]]]

*/

/* Desktop code */

function getSizeOptions () {
    let sizeOptions = []
    let $sizeChechboxes = $(".filter-cor");
    $sizeChechboxes.each(i => {
        if($($sizeChechboxes[i]).is(":checked")){
            sizeOptions.push($($sizeChechboxes[i]).val().toLowerCase());
        }
    });
    return ["cor",sizeOptions];
}

function getTamOptions () {
    let sizeOptions = []
    let $sizeChechboxes = $(".filter-tam");
    $sizeChechboxes.each(i => {
        if($($sizeChechboxes[i]).hasClass("btn-selected")){
            sizeOptions.push($($sizeChechboxes[i]).text().toLowerCase());
        }
    });
    return ["tam",sizeOptions];
}

function getPriceOptions () {
    let priceOptions = []
    let $sizeChechboxes = $(".filter-price");
    $sizeChechboxes.each(i => {
        if($($sizeChechboxes[i]).is(":checked")){
            let $valuesArray = $($sizeChechboxes[i]).val().toLowerCase();
            $valuesArray = $valuesArray.split(",");
            $valuesArray = $valuesArray.map(i => parseInt(i));
            priceOptions.push($valuesArray);
        }
    });
    return ["price",priceOptions];
}

/* Mobile code */

    function getMobileSizeOptions () {
        let sizeOptions = []
        let $sizeChechboxes = $(".subcategory-color");
        $sizeChechboxes.each(i => {
            if($($sizeChechboxes[i]).hasClass("category-selected")){
                //console.log($($sizeChechboxes[i]).attr("value"))
                sizeOptions.push($($sizeChechboxes[i]).attr("value").toLowerCase());
            }
        });
        //console.log("",sizeOptions)
        return ["cor",sizeOptions];
    }

function getMobileTamOptions () {
    let sizeOptions = []
    let $sizeChechboxes = $(".subcategory-tam");
    $sizeChechboxes.each(i => {
        if($($sizeChechboxes[i]).hasClass("category-selected")){
            sizeOptions.push($($sizeChechboxes[i]).attr("value").toLowerCase());
        }
    });
    //console.log("",sizeOptions)
    return ["tam",sizeOptions];
}

function getMobilePriceOptions () {
    let priceOptions = []
    let $sizeChechboxes = $(".subcategory-price");
    $sizeChechboxes.each(i => {
        if($($sizeChechboxes[i]).hasClass("category-selected")){
            
            let $valuesArray = $($sizeChechboxes[i]).attr("value").toLowerCase();
            $valuesArray = $valuesArray.split(",");
            $valuesArray = $valuesArray.map(i => parseInt(i));
            priceOptions.push($valuesArray);
        }
    });
    //console.log("",priceOptions)
    return ["price",priceOptions];
}


export function genFilters(mobile) {
    
    let filter = []
    if(mobile !="mobile") {
        filter.push(getTamOptions())
        filter.push(getSizeOptions())
        filter.push(getPriceOptions())
    }else{
        filter.push(getMobileTamOptions())
        filter.push(getMobileSizeOptions())
        filter.push(getMobilePriceOptions())
    }
    
    return filter
}