'use strict';
{
    // const double = (num) => {
    //     return num * 2;
    // };

    const calc = (num, func) => {
        // return double(20)
        return func(num);
    };

    // console.log(calc(20, double));

    console.log(calc(20, (num) => {
        return num * 2;
    }));
}