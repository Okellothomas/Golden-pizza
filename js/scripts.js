// Implementation for the small size pizza. 
$(document).ready(function(){
    $("form#cardone").submit(function(e){
        e.preventDefault();
        let PizzaNo = $('input#number1').val();
        let pizzaCo = 500;
        let crustNa = $('#crust1').find(":selected").text();
        let toppingNa = $('#topping1').find(":selected").text();

        const smallPrice = new Small(PizzaNo,pizzaCo,crustNa,toppingNa);
        smallPrice.pizzaPrice();
    });

    function Small(pizano, pizaco, custna, toppingna){
        this.pizaco = pizaco;
        this.pizano = pizano;
        this.custna = custna;
        this.toppingna = toppingna; 
    }

    Small.prototype.pizzaPrice = function(){

        let custPrices;

        if(this.custna.toLowerCase() == 'cracker'){
            custPrices = 20;
        }else if(this.custna.toLowerCase() == 'flat bread'){
            custPrices = 50;
        }else if(this.custna.toLowerCase() == 'stuffed'){
            custPrices = 70;
        }else if(this.custna.toLowerCase() == 'cheese'){
            custPrices = 85;
        }else if(this.custna.toLowerCase() == 'thick'){
            custPrices = 94;
        }else if(this.custna.toLowerCase() == 'gluten-free'){
            custPrices = 35;
        } else if(this.custna.toLowerCase() == 'crispy'){
            custPrices = 78;
        } else{
            custPrices = 0;
        }

        let toppingPrices;


        if(this.toppingna.toLowerCase() == 'broccoli'){
            toppingPrices = 30;
        } else if(this.toppingna.toLowerCase() == 'bacon'){
            toppingPrices = 60;
        } else if(this.toppingna.toLowerCase() == 'gorgonzola'){
            toppingPrices = 78;
        } else if(this.toppingna.toLowerCase() == 'anchovies'){
            toppingPrices = 100;
        } else if(this.toppingna.toLowerCase() == 'eggplant'){
            toppingPrices = 90;
        } else if(this.toppingna.toLowerCase() == 'sausage'){
            toppingPrices = 70;
        } else{
            toppingPrices = 0;
        }

        
        let pizzPriceCost = parseInt(this.pizano) * this.pizaco;
        let topping_cust_Price = toppingPrices + custPrices;
        let totalCost = pizzPriceCost + topping_cust_Price;

        if(parseInt(this.pizano) <= 0 || toppingPrices <= 0 || custPrices <= 0){
            alert('Choose all the fields please');
        }else {
            alert("Your Pizza Costs " + totalCost + " Thank your for shopping with us, come again.");
        }

    }

   

})

// Implementation for the medium size pizza. 
$(document).ready(function(){
    $("form#cardtwo").submit(function(e){
        e.preventDefault();
        let PizzaNo = $('input#number2').val();
        let pizzaCo = 750;
        let crustNa = $('#crust2').find(":selected").text();
        let toppingNa = $('#topping2').find(":selected").text();

        const smallPrice = new Small(PizzaNo,pizzaCo,crustNa,toppingNa);
        smallPrice.pizzaPrice();
    });

    function Small(pizano, pizaco, custna, toppingna){
        this.pizaco = pizaco;
        this.pizano = pizano;
        this.custna = custna;
        this.toppingna = toppingna; 
    }

    Small.prototype.pizzaPrice = function(){

        let custPrices;

        if(this.custna.toLowerCase() == 'cracker'){
            custPrices = 30;
        }else if(this.custna.toLowerCase() == 'flat bread'){
            custPrices = 60;
        }else if(this.custna.toLowerCase() == 'stuffed'){
            custPrices = 80;
        }else if(this.custna.toLowerCase() == 'cheese'){
            custPrices = 95;
        }else if(this.custna.toLowerCase() == 'thick'){
            custPrices = 104;
        }else if(this.custna.toLowerCase() == 'gluten-free'){
            custPrices = 45;
        } else if(this.custna.toLowerCase() == 'crispy'){
            custPrices = 88;
        } else{
            custPrices = 0;
        }

        let toppingPrices;


        if(this.toppingna.toLowerCase() == 'broccoli'){
            toppingPrices = 40;
        } else if(this.toppingna.toLowerCase() == 'bacon'){
            toppingPrices = 70;
        } else if(this.toppingna.toLowerCase() == 'gorgonzola'){
            toppingPrices = 88;
        } else if(this.toppingna.toLowerCase() == 'anchovies'){
            toppingPrices = 110;
        } else if(this.toppingna.toLowerCase() == 'eggplant'){
            toppingPrices = 100;
        } else if(this.toppingna.toLowerCase() == 'sausage'){
            toppingPrices = 80;
        } else{
            toppingPrices = 0;
        }

        
        let pizzPriceCost = parseInt(this.pizano) * this.pizaco;
        let topping_cust_Price = toppingPrices + custPrices;
        let totalCost = pizzPriceCost + topping_cust_Price;

        if(parseInt(this.pizano) <= 0 || toppingPrices <= 0 || custPrices <= 0){
            alert('Choose all the fields please');
        }else {
            alert("Your Pizza Costs " + totalCost + " Thank your for shopping with us, come again.");
        }

    }

})

// Implementation for the large size pizza. 
$(document).ready(function(){
    $("form#cardthree").submit(function(e){
        e.preventDefault();
        let PizzaNo = $('input#number3').val();
        let pizzaCo = 1000;
        let crustNa = $('#crust3').find(":selected").text();
        let toppingNa = $('#topping3').find(":selected").text();

        const smallPrice = new Small(PizzaNo,pizzaCo,crustNa,toppingNa);
        smallPrice.pizzaPrice();
    });

    function Small(pizano, pizaco, custna, toppingna){
        this.pizaco = pizaco;
        this.pizano = pizano;
        this.custna = custna;
        this.toppingna = toppingna; 
    }

    Small.prototype.pizzaPrice = function(){

        let custPrices;

        if(this.custna.toLowerCase() == 'cracker'){
            custPrices = 40;
        }else if(this.custna.toLowerCase() == 'flat bread'){
            custPrices = 70;
        }else if(this.custna.toLowerCase() == 'stuffed'){
            custPrices = 90;
        }else if(this.custna.toLowerCase() == 'cheese'){
            custPrices = 105;
        }else if(this.custna.toLowerCase() == 'thick'){
            custPrices = 114;
        }else if(this.custna.toLowerCase() == 'gluten-free'){
            custPrices = 55;
        } else if(this.custna.toLowerCase() == 'crispy'){
            custPrices = 98;
        } else{
            custPrices = 0;
        }

        let toppingPrices;


        if(this.toppingna.toLowerCase() == 'broccoli'){
            toppingPrices = 50;
        } else if(this.toppingna.toLowerCase() == 'bacon'){
            toppingPrices = 80;
        } else if(this.toppingna.toLowerCase() == 'gorgonzola'){
            toppingPrices = 98;
        } else if(this.toppingna.toLowerCase() == 'anchovies'){
            toppingPrices = 120;
        } else if(this.toppingna.toLowerCase() == 'eggplant'){
            toppingPrices = 110;
        } else if(this.toppingna.toLowerCase() == 'sausage'){
            toppingPrices = 90;
        } else{
            toppingPrices = 0;
        }

        
        let pizzPriceCost = parseInt(this.pizano) * this.pizaco;
        let topping_cust_Price = toppingPrices + custPrices;
        let totalCost = pizzPriceCost + topping_cust_Price;

        if(parseInt(this.pizano) <= 0 || toppingPrices <= 0 || custPrices <= 0){
            alert('Choose all the fields please');
        }else {
            alert("Your Pizza Costs " + totalCost + " Thank your for shopping with us, come again.");
        }

    }

})

// implementing the checkout button. 



// Implementation for cancel button
    // Reload the page
$(document).ready(function(){
    $('button#cancel').click(function(e){
        e.preventDefault();
        location.reload();
    });
});


//Implementing the delivery button
$(document).ready(function(){
    $('button#destination').click(function(e){
        e.preventDefault();
        let destination = $('#destination').find(":selected").text();
        alert('Your order will be delivered to: '+ destination + " Thank you and come again!");
    });
})



// let crustPrice;

// // if (this.crustNa === "Cracker"){
// //     crustPrice = 60;
// // } else if(this.custna === "Flat Bread"){
// //     crustPrice = 80;
// // }else if(this.custna === "Stuffed"){
// //     crustPrice = 100;
// // }else if(this.custna === "Cheese"){
// //     crustPrice = 120;
// // }else if(this.custna === "Thick"){
// //     crustPrice = 140;
// // }else if(this.custna === "Gluten-free"){
// //     crustPrice = 160;
// // }else if(this.custna === "Crispy"){
// //     crustPrice = 180;
// // }else{
// //     crustPrice = 60;
// // }

// let toppingPrice;

// if (this.toppingna === "Broccoli"){
//     toppingPrice = 20;
// } else if(this.toppingna === "Bacon"){
//     toppingPrice = 40;
// }else if(this.toppingna === "Gorgonzola"){
//     crustPrice = 60;
// }else if(this.toppingna === "Anchovies"){
//     crustPrice = 80;
// }else if(this.toppingna === "Eggplant"){
//     crustPrice = 100;
// }else if(this.custna === "Sausage"){
//     crustPrice = 120;
// }else{
//     crustPrice = 0;
// }

// // let pizzPriceCost = parseInt(this.pizano) * this.pizaco;
// // alert(pizzPriceCost);
// alert(this.custna);
// alert(toppingPrice);

// //  alert(parseInt((this.pizano) * this.pizaco) + (parseInt(crustPrice) + parseInt(toppingPrice)));
// // alert(parseInt(this.pizano));





// $(document).ready(function(){
//     $('div#cardone').submit(function(e){
//         let pizzaNumber = $('input#number1').val();
//         let pizzaCost1 = 500; // cost of small pizza
//         let crustName1 = $('#crust1').find(":selected").text();
//         let toppingName1 = $('#topping1').find(":selected").text();


//         const oneCost = new Ticket(pizzaNumber,pizzaCost1,crustName1,toppingName1);
//         console.log(pizzaCost1);
//         console.log(oneCost);
//         alert(pizzaCost1)
//         // alert(toppingName1);
//         // alert(crustName1);
//         // alert(pizzaNumber * pizzaCost1);
//     // constructor for small pizza
//     e.preventDefault();
//     });
//         function Ticket(numbPizza, costPizaa, noCust, noTopping){
//         this.numbPizza = numbPizza;
//         this.costPizaa = costPizaa;
//         this.noCust = noCust;
//         this.noTopping = noTopping;
//             // alert('this one'); 
//             // alert(this.pizzaNo*pizzaCo);
//      }


//     Ticket.prototype.smallPizaCost = function(){
//           console.log('this is the one'); 
//     }

//   });
    // function Ticket(numbPizza, costPizaa, noCust, noTopping){
    //     this.numbPizza = numbPizza;
    //     this.costPizaa = costPizaa;
    //     this.noCust = noCust;
    //     this.noTopping = noTopping;
    //         // alert('this one'); 
    //         // alert(this.pizzaNo*pizzaCo);
    //  }


    // Ticket.prototype.smallPizaCost = function(){
    //       console.log('this is the one'); 
    // }




// $(document).ready(function(){


//     // return the total charge.. charge per pizza + charge of crust + charch of christ
//     $('button#smallPizza').click(function(e){
//         e.preventDefault();
//         let pizzaNumber = $('input#number1').val();
//         let pizzaCost1 = 500; // cost of small pizza
//         let crustName1 = $('#crust1').find(":selected").text();
//         let toppingName1 = $('#topping1').find(":selected").text();
//         // alert(toppingName1);
//         alert(this.pizzaNo);
//         console.log(pizzaNumber * pizzaCost1);
//     });

//     // constructor for small pizza

//     function smallPizzaa(pizzaNo, pizzaCo, CustNo, toopingNo){
//         this.pizaNumber = pizzaNo;
//         this.pizzCost = pizzaCo;
//         this.custNumber = CustNo;
//         this.toppingNumber = toopingNo;
//     }

//     smallPizzaa.prototype.smallPizaCost = function(){
//         alert('price culculated')
//     }

//     // return the total charge.. charge per pizza + charge of crust + charch of christ
//     $('a#mediumPizza').click(function(e){
//         e.preventDefault();
//         let pizzaNumber = $('input#number2').val();
//         let pizzaCost2 = 800; // cost of medium pizza
//         let crustName1 = $('#crust2').find(":selected").text();
//         let toppingName2 = $('#topping2').find(":selected").text();
//         alert(toppingName2);
//         console.log(pizzaNumber) * pizzaCost2;
//     });

//     // return the total charge.. charge per pizza + charge of crust + charch of christ
//     $('a#largePizza').click(function(e){
//         e.preventDefault();
//         let pizzaNumber = $('input#number3').val();
//         let pizzaCost3 = 1000;
//         let crustName = $('#crust3').find(":selected").text();
//         let toppingName3 = $('#topping3').find(":selected").text();
//         alert(toppingName3);
//         console.log(pizzaNumber) * pizzaCost3;
//     });

//     // Reload the page
    // $('button#cancel').click(function(e){
    //     e.preventDefault();
    //     location.reload();
    // });

//     // Message and the destination of delivery.
//     $('button#destination').click(function(e){
//         e.preventDefault();
//         let destination = $('#destination').find(":selected").text();
//             alert('Your order will be delivered to: '+ destination + " Thank you and come again!");
//     });

//     // returns total amount of order charged. delivery + cost of pizza.
//     $('button#checkout').click(function(e){
//         e.preventDefault();
//         alert('YYour total cost for the pizza and delivery will be.');
//     });
