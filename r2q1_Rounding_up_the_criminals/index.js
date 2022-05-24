
let jail = document.querySelectorAll('.a')
for (let j of jail) {
    j.style.backgroundColor = 'red';
    j.innerText += '(jailed)';
}

let undercover = document.querySelectorAll('.a.undercover')
for (let u of undercover) {
    u.style.backgroundColor = 'yellow';
}