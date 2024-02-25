'use strict';
{
    const prices = [100, 150, 200];

    // const pricesWithTax = [];
    // prices.forEach((price) => {
    //     pricesWithTax.push(price * 1.1);
    // });

    const pricesWithTax = prices.map((prices) => {
        return prices * 1.1;
    });


    console.log(pricesWithTax);
}