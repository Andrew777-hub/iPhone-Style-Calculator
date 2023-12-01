// Функція для додавання символу на дисплей калькулятора
function appendToResult(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Функція для обчислення виразу на дисплеї
function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Функція для очищення дисплею (всі значення)
function clearAllResult() {
    const display = document.getElementById('display');
    display.value = '';
}

// Функція для видалення останньої цифри з дисплею
function clearSingleDigit() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
