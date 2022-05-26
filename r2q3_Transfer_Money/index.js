document.querySelector('#topUp10').addEventListener('click', function(){
    console.log('alert');
    let account = document.querySelector('#account');
    let accountMoney = 0;
    accountMoney.innerHTML = parseInt(account + 10);
})

alert('hello')