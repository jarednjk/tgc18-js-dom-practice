document.querySelector('#increment').addEventListener('click', function(){
    let count = parseInt(document.querySelector('#box').innerHTML);
    if (count < 10) {
        count++;
        document.querySelector('#box').innerHTML = count;
    }
    if (count%2 == 0) {
        document.querySelector('#box').style.backgroundColor = "green";
    } else {
        document.querySelector('#box').style.backgroundColor = "red";
    }
})

document.querySelector('#decrease').addEventListener('click', function(){
    let count = parseInt(document.querySelector('#box').innerHTML);
    if (count > 0)
    count--;
    document.querySelector('#box').innerHTML = count;
    if (count%2 == 0) {
        document.querySelector('#box').style.backgroundColor = "green";
    } else {
        document.querySelector('#box').style.backgroundColor = "red";
    }
})

document.querySelector('#reset').addEventListener('click', function(){
    (document.querySelector('#box').innerHTML) = 0;
})