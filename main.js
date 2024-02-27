'use strict';
{
    document.querySelector('button').addEventListener('click', () => {
        const liElement = document.createElement('li');
        liElement.textContent = 'Hanako';

        //appendChild
        // document.querySelector('ul').appendChild(liElement);

        //insertBefore
        // document.querySelector('ul').insertBefore(
        //     liElement,
        //     document.querySelector('#second')
        // );

        //要素の削除
        if (confirm('Sure?') === true) {
            document.querySelector('#second').remove();
        }
    });
}