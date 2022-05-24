// PLACE YOUR CODE HERE


let emphasis = document.querySelectorAll('.emphasis');
for (let e of emphasis) {
    e.style.fontFamily = 'Verdana';
}

let finished = document.querySelectorAll('li.finished');
for (let f of finished) {
    f.style.textDecoration = 'line-through';
}

let todo = document.querySelectorAll('#low-priority .todo');
for (let t of todo) {
    t.style.backgroundColor = 'blue';
}

let alert = document.querySelectorAll('.alert');
for (let a of alert) {
    a.style.color = 'red';
}