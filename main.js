'use strict';
{
    const string = prompt('Name?');
    // if (string.toLowerCase() === 'taro') {
    if (string.toUpperCase() === 'TARO') {
        console.log('Correct!');
    } else {
        console.log('Wrong!');
    }
}