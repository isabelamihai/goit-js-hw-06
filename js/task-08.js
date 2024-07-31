const registerForm = document.querySelector('.login-form')

registerForm.addEventListener('submit', handleSubmit);
    
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        console.log("Please fill in all the fields!");
        return;
    }

    const formElements = {};
    [...registerForm.elements].forEach(element => {
        if (element.name) {
            formElements[element.name] = element.value.trim();
        }
    });

    console.log('Form data:', formElements);
    registerForm.reset();
}