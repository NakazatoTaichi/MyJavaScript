'use strict';

// let command;

// do {
//     command = Number(prompt('Menu 1, 2, 3 or 0 to exit'))
//     if (command === 0) {
//         console.log('Exited');
//     } else {
//         console.log(`Menu ${command} processed. `);
//     }
// } while (command !== 0);

let amount = 100;

for (let year = 1; year <= 30; year++) {
    amount *= 1.05;
    if (amount < 200) {
        continue;
    }
    if (amount > 300) {
        break;
    }
    console.log(`Year ${year}: ${amount}`);
}