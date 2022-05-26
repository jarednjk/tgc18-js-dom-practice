let account = parseInt(document.querySelector('#account').innerHTML);
let wallet = parseInt(document.querySelector('#other-wallet').innerHTML);

document.querySelector('#topUp10').addEventListener('click', function(){
    account += 10;
    document.querySelector('#account').innerHTML = account;
})

document.querySelector('#transfer10ToWallet').addEventListener('click', function(){
    if (account >= 10) {
        wallet += 10;
        document.querySelector('#other-wallet').innerHTML = wallet;
        account -= 10;
        document.querySelector('#account').innerHTML = account;
    }
})

document.querySelector('#transfer10ToAccount').addEventListener('click', function(){
    if (wallet >= 10) {
        account += 10;
        document.querySelector('#account').innerHTML = account;
        wallet -= 10;
        document.querySelector('#other-wallet').innerHTML = wallet;
    }
})

document.querySelector('#btn-spend').addEventListener('click', function(){
    let spend = parseInt(document.querySelector("#spend").value);
    if (wallet >= spend) {
        wallet -= spend;
        document.querySelector('#other-wallet').innerHTML = wallet;
    }
})