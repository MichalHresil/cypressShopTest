class StorePage{
    getAllProducts(){

    }

    checkProductsFilter(maxVal){

        var sum

        cy.get(".products li .price").each(($el)=>{
        
            const childr = $el.children()
    
                if(childr.length === 1){
                    console.log($el.children().text())
                }
                else if(childr.length === 2){
                    if($el.text().includes("–")){
                        //console.log(childr.eq(0).text().replace(/^\D+/g, ""))
                    }
                    else{
                        //console.log(childr.eq(1).text().replace(/^\D+/g, ""))
                    }
                }
        })
    }
}

export default StorePage