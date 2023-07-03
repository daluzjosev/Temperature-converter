// Get input elements
var temperatureInput = document.getElementById('temperature');
var fromUnitSelect = document.getElementById('fromUnit');
var toUnitSelect = document.getElementById('toUnit');
var convertButton = document.getElementById('convert');
var convertedTemperatureResult = document.getElementById('convertedTemperature');

// Add click event listener to convert button
convertButton.addEventListener('click', function () {
  // Get temperature value and selected units
  var temperature = parseFloat(temperatureInput.value);
  var fromUnit = fromUnitSelect.value;
  var toUnit = toUnitSelect.value;

  // Clear previous result
  clearResult();

  // Perform conversion based on selected units
  if (!isNaN(temperature)) {
    var convertedTemperature;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9 / 5 + 32).toFixed(2);
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      convertedTemperature = (temperature + 273.15).toFixed(2);
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      convertedTemperature = ((temperature - 32) * 5 / 9).toFixed(2);
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      convertedTemperature = ((temperature - 32) * 5 / 9 + 273.15).toFixed(2);
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      convertedTemperature = (temperature - 273.15).toFixed(2);
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      convertedTemperature = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
    } else {
      // Invalid conversion, show error message
      convertedTemperatureResult.textContent = 'Invalid conversion!';
      return;
    }

    // Update result
    convertedTemperatureResult.textContent = convertedTemperature + ' ' + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
  }
});

// Function to clear previous result
function clearResult() {
  convertedTemperatureResult.textContent = '';
}
