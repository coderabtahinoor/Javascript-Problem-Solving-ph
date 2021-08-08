//Problem 1 

/* 
==> function name : seerToMon
==> Take seer as a parameter
==> return only number.Don't add any text after and before number
*/
//Solution 1: 
/* ============================================== */
function seerToMon(seer) {
    let mon = seer / 40;

    //validation for taking input as a number.
    if (typeof seer == "number") {
        return mon;
    }
    return "Opps!!Only Number Value is acceptable.";
}
console.log(seerToMon(80));


/* ============================================== */

//Problem 2 
/*
==> function name : totalSales
==> Take three parameter (shirtQuantity,pantQuantity,shoesQuantity)
==> Shirt Price = 100tk , Pant Price = 200tk, Shoes Price = 500tk
==> return total sales
*/
//Solution 2: 
/* ============================================== */
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    if (typeof shirtQuantity == "number" && typeof pantQuantity == "number" && typeof shoesQuantity == "number") {

        //Decalare the price
        let shirtPrice = 100;
        let pantPrice = 200;
        let shoesPrice = 500;

        //total Price of per products 
        let totalShirtPrice = shirtPrice * shirtQuantity;
        let totalPantPrice = pantPrice * pantQuantity;
        let totalShoePrice = shoesPrice * shoesQuantity;

        //return the total money of sales
        let totalMoneyOfSales = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalMoneyOfSales;

    } else {
        return "Opps!!!Invalid Input!!Please give a number as an input!!"
    }
}
console.log(totalSales(2, 2, 1));





/* ============================================== */

//Problem 3 
/*
==> function name : deliveryCost
==> Take a paremeter for items number
==> 1 -100 items  shipping == 100tk
==> 100 - 200 items shipping == 80tk
==> 200 r besi shipping = 50tk
==> return delevery costs
*/

//Solution 3: 
/* ============================================== */
function deliveryCost(products) {
    if (typeof products == "number") {

        //delivery costs
        const firstHundredShippingCost = 100;
        const secondHundredShippingCost = 80;

        if (products <= 100) {
            const productsPrice = products * firstHundredShippingCost;
            return productsPrice;
        } else if (products <= 200) {
            const firstHundredProductPrice = 100 * firstHundredShippingCost;
            const leftProducts = products - 100;
            const secondHundredProductPrice = leftProducts * 80;
            return firstHundredProductPrice + secondHundredProductPrice;
        } else {
            const firstHundredProductPrice = 100 * firstHundredShippingCost;
            const secondHundredProductPrice = 100 * secondHundredShippingCost;
            const leftProducts = products - 200;
            const othersProductPrice = leftProducts * 50;
            return firstHundredProductPrice + secondHundredProductPrice + othersProductPrice;
        }

    } else {
        return "Invalid!!Please give the product items as a number.!!"
    }
}
console.log(deliveryCost(750))



/* ============================================== */

//Problem 4 
/*
==> function name : perfectFriend
==> return that names which names character equal to 5(first 5 characters name)
==> return string
*/

//Solution 4: 
/* ============================================== */

function perfectFriend(friendsName) {

    if (typeof friendsName == 'object') {
        //decalare initial value of name which have 5 characters
        let fiveCharactersName = 0;

        //access the array element by using for loop
        for (let i = 0; i <= friendsName.length; i++) {
            let element = friendsName[i];

            //checking the characters numbre of my friends name
            if (element.length == 5) {
                return fiveCharactersName = element;
            }
        }
        return fiveCharactersName;

    } else {
        return "Invalid,Data Type!!,Input Array."
    }
}
let friends = ["Nohood", "Zahee", "Kabid", "Abtahi Noor", "Daoud"]
console.log(perfectFriend(friends))