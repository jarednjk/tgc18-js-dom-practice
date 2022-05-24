// PLACE YOUR CODE HERE

document.querySelector('button').addEventListener('click', function(){
    let diceRoll = document.querySelectorAll('.box');
    let sum = 0;
    for (let d of diceRoll) {
        d.innerHTML = parseInt(Math.floor( Math.random() * 6 ) +1);
        sum = d[0].innerHTML + d[1].innerHTML;
        (document.querySelector('#result').innerHTML) = sum;
    }
    
})