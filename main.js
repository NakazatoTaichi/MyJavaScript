'use strict';

// const score = Number(prompt('Score?'));

// if(score >= 90) {
//     console.log('A!');
// } else if (score >= 70) {
//     console.log('B!');
// } else {
//     console.log('C!');
// }

const color = prompt('Color?');

switch (color) {
    case 'red':
        console.log('Stop!');
        break;
    case 'yellow':
        console.log('Slow down!');
        break;
    case 'blue':
        console.log('Go!');
        break;
    default:
        console.log('Wrong color!');
        break;
}
