function extractFormInfo() {

  let firstName = document.querySelector('#first-name').value;

  let lastName = document.querySelector('#last-name').value;

  // let ticketClass = document.querySelector('input[name="ticket-class"]:checked');

  let ticketClass = null;
  let radioBtns = document.querySelectorAll('.ticket-class');
  for (let radioBtn of radioBtns) {
    if (radioBtn.checked) {
      ticketClass = radioBtn.value;
      break;
    }
  }

  let optionsArray = [];
  let options = document.querySelectorAll('.options');
  for (let o of options) {
    if (o.checked) {
      optionsArray.push(o.value);
    }
  }

  return [firstName, lastName, ticketClass, optionsArray];
}



document.querySelector('#btn-book').addEventListener('click', function () {
  let infoArray = extractFormInfo();
  let [firstName, lastName, ticketClass, optionsArray] = infoArray;
  console.log(firstName);
  console.log(lastName);
  console.log(ticketClass);
  console.log(optionsArray);

  let div = document.querySelector('#summary');
  
  for (info of infoArray) {
    let liElement = document.createElement('li');
    liElement.innerHTML = info;
    div.appendChild(liElement);
  }
  
  let costElement = document.createElement('li');
  let cost = 0;
  
  if (ticketClass == 'first-class') {
    cost += 1200;
  } else if (ticketClass == 'business-class') {
    cost += 750;
  } else if (ticketClass == 'economy') {
    cost += 250;
  }

  let options = document.querySelectorAll('.options');
  for (let o of options) {
    if (o.checked) {
      cost += 10;
    }
  }
  
  costElement.innerHTML = cost;

  div.appendChild(costElement);

})