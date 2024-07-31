const input = document.querySelector('#validation-input');
const dataLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
    if (input.value.length === dataLength) {  
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});