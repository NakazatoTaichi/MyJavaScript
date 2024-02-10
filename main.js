'use strict';

/*
javascriptにおける数値の表現
*/

//変数
let price;
//定数
const rate = 1.1;

price = 150;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);

// price = price ++;
// console.log(price * 120 * rate);
// console.log(price * 130 * rate);
// console.log(price * 140 * rate);

price += 1;
console.log(price * 120 * rate);
console.log(price * 130 * rate);
console.log(price * 140 * rate);


