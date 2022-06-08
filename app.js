const form1 = document.querySelector('#form');
const formBtn = document.querySelector('#form-btn');

formBtn.addEventListener('click', (e) => {
    const inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        input.addEventListener('invalid', (e) => {
            if(input.value === '') {
                input.setCustomValidity(`${input.name} cannot be empty.`);
            } else {
                if (input.name === "email") {
                    input.setCustomValidity('Looks like this is not an email');
                } else {
                    input.setCustomValidity('Invalid entry');
                }
            }
          });
        input.addEventListener('input', () => {
            input.setCustomValidity('');
            input.checkValidity();
        });
    }
});

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form submitted');
    let email = document.querySelector('#email').value;
    alert(`Thank you for enrolling! An email will be sent to ${email}.`)
    location.reload();
});