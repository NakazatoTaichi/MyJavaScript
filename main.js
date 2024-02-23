'use strict';
{
    const scores = [70, 90, 80, 85];

    scores.splice(2, 0, 77, 80);

    const deleted = scores.splice(3, 1);

    scores.splice(2, 2, 30);

    console.log(scores);
    console.log(deleted);
}