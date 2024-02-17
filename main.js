'use strict';
{
    //関数宣言
    // function double(num) {
    //     return num * 2;
    // }

    //関数式
    // const double = function (num) {
    //     return num * 2;
    // };

    // アロー関数式
    //引数がひとつの場合
    // const double = num => {
    //     return num * 2;
    // };

    //returnで返されるのが1行だった場合
    const double = (num) => num * 2;

    console.log(double(10));

}