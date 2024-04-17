let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('mainDisplay').innerText = displayValue;
}

function deleteLastDigit() {
    // Get the current value from the input field
    var currentValue = document.getElementById('mainDisplay').value;
    
    // Check if the current value is not empty
    if (currentValue.length > 0) {
        // Remove the last character
        var newValue = currentValue.slice(0, -1);
        
        // Update the input field with the new value
        document.getElementById('mainDisplay').value = newValue;
    }
}