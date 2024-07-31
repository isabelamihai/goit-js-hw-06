let counterValue = 0;
const spanValue = document.querySelector('#value');
const deBtn = document.querySelector('#counter button[data-action="decrement"]');
const inBtn = document.querySelector('#counter button[data-action="increment"]');

const updateValue = () => {
    spanValue.textContent = counterValue;
};

const handleDecrement = () => {
    counterValue -= 1;
    updateValue();
}
const handleIncrement = () => {
    counterValue += 1;
    updateValue();
}

deBtn.addEventListener("click", handleDecrement);
inBtn.addEventListener("click", handleIncrement);
