function appendToDisplay(value) {
    const display = document.getElementById('display');

    // √ logic
    if (value === '√') {
        display.value = Math.sqrt(eval(display.value || "0")).toFixed(4);
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (error) {
        display.value = 'Error';
    }
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

// Keyboard support
document.addEventListener("keydown", function (e) {
    const key = e.key;
    const validKeys = "0123456789+-*/.%";

    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    } else if (key === "r") {
        // Optional: √ shortcut key
        appendToDisplay("√");
    }
});
