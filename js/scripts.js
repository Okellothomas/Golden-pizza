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
        let totalCost1 = pizzPriceCost + topping_cust_Price;

        if(parseInt(this.pizano) <= 0 || toppingPrices <= 0 || custPrices <= 0){
            alert('Choose all the fields please');
        }else {
            alert("Your Pizza Costs Ksh." + totalCost1 + " Thank your for shopping with us, come again.");
        }

        $('button#checkout').click(function(e){
            e.preventDefault();
            
            var grandTotal = totalCost1;
            if(grandTotal <= 0){
                alert('Make a purchase')
            }else{
                alert('Your total cost for small Pizza is Ksh.' + grandTotal + " Please choose your destination");
                $('#hide').show();
            }
            
        });

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

        const mediumPrice = new Medium(PizzaNo,pizzaCo,crustNa,toppingNa);
        mediumPrice.pizzaPrice();
    });

    function Medium(pizano, pizaco, custna, toppingna){
        this.pizaco = pizaco;
        this.pizano = pizano;
        this.custna = custna;
        this.toppingna = toppingna; 
    }

    Medium.prototype.pizzaPrice = function(){

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
        let totalCost2 = pizzPriceCost + topping_cust_Price;

        if(parseInt(this.pizano) <= 0 || toppingPrices <= 0 || custPrices <= 0){
            alert('Choose all the fields please');
        }else {
            alert("Your Pizza Costs Ksh." + totalCost2 + " Thank your for shopping with us, come again.");
        }

        $('button#checkout').click(function(e){
            e.preventDefault();
            
            var grandTotal = totalCost2;

            if(grandTotal <= 0){
                alert('Make a purchase');
            }else{
                alert('Your total cost for Medium Pizza is:  Ksh.' + grandTotal + " Please choose your destination");
                $('#hide').show();
            }
        });

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

        const largePrice = new Large(PizzaNo,pizzaCo,crustNa,toppingNa);
        largePrice.pizzaPrice();
    });

    function Large(pizano, pizaco, custna, toppingna){
        this.pizaco = pizaco;
        this.pizano = pizano;
        this.custna = custna;
        this.toppingna = toppingna; 
    }

    Large.prototype.pizzaPrice = function(){

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
        let totalCost3 = pizzPriceCost + topping_cust_Price;

        if(parseInt(this.pizano) <= 0 || toppingPrices <= 0 || custPrices <= 0){
            alert('Choose all the fields please');
        }else {
            alert("Your Pizza Costs Ksh." + totalCost3 + " Thank your for shopping with us, come again.");
        }

        $('button#checkout').click(function(e){
            e.preventDefault();
            
            var grandTotal = totalCost3;
            if(grandTotal <= 0){
                alert('Make a purchase');
            }else{
                alert('Your total cost for Large Pizza is Ksh.' + grandTotal + " Please choose your destination");
                $('#hide').show();
            } 
        });
    }
})
/*
 Implementation for the cancel button
 Reload the page
*/
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
        let destination = $('input#delivery').val().toLowerCase();
        // let Destination = prompt("Enter your Destination").toLowerCase().append('input#delivery');

        if(destination == ''){
            alert('Enter your destination')
        }else{
            alert('Your order will be delivered to: '+ destination + " at Ksh.300 " + " Thank you and come again!");
        }
    });
});
