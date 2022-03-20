$(document).ready(function(){


    // return the total charge.. charge per pizza + charge of crust + charch of christ
    $('button#smallPizza').click(function(e){
        e.preventDefault();
        let pizzaNumber = $('input#number1').val();
        let pizzaCost1 = 500; // cost of small pizza
        let crustName1 = $('#crust1').find(":selected").text();
        let toppingName1 = $('#topping1').find(":selected").text();
        alert(toppingName1);
        console.log(pizzaNumber * pizzaCost1);
    });

    // return the total charge.. charge per pizza + charge of crust + charch of christ
    $('a#mediumPizza').click(function(e){
        e.preventDefault();
        let pizzaNumber = $('input#number2').val();
        let pizzaCost2 = 800; // cost of medium pizza
        let crustName1 = $('#crust2').find(":selected").text();
        let toppingName2 = $('#topping2').find(":selected").text();
        alert(toppingName2);
        console.log(pizzaNumber) * pizzaCost2;
    });

    // return the total charge.. charge per pizza + charge of crust + charch of christ
    $('a#largePizza').click(function(e){
        e.preventDefault();
        let pizzaNumber = $('input#number3').val();
        let pizzaCost3 = 1000;
        let crustName = $('#crust3').find(":selected").text();
        let toppingName3 = $('#topping3').find(":selected").text();
        alert(toppingName3);
        console.log(pizzaNumber) * pizzaCost3;
    });

    // Reload the page
    $('button#cancel').click(function(e){
        e.preventDefault();
        location.reload();
    });

    // Message and the destination of delivery.
    $('button#destination').click(function(e){
        e.preventDefault();
        let destination = $('#destination').find(":selected").text();
            alert('Your order will be delivered to: '+ destination + " Thank you and come again!");
    });

    // returns total amount of order charged. delivery + cost of pizza.
    $('button#checkout').click(function(e){
        e.preventDefault();
        alert('YYour total cost for the pizza and delivery will be.');
    });


});