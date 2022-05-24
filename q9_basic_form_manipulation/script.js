
function getFormValues() {

    let email = null;
    email = document.querySelector('#email-address').value;

    let model = null;
    let models = document.querySelectorAll('.phone-type')
    for (let m of models) {
        if (m.checked) {
            model = m.value;
            break;
        }
    }

    let services = [];
    let service = document.querySelectorAll('.services')
    for (let s of service) {
        if (s.checked) {
            services.push(s.value)
        }
    }

    let pickup = null;
    pickup = document.querySelector('#pick-up').value;

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
