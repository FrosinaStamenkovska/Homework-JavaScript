// Function for converting Celsius to Fahrenheit
function celsiusToFahrenheit(celsius){
    let result = celsius * 1.8 + 32;
    return result;
}

// Function for converting Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit){
    let result = (5/9) * (fahrenheit - 32);
    return result;
}

// Options for the user to choose Celsius or Fahrenheit
let celsiusOrFahrenheit = prompt(`For Celsius to Fahrenheit coversion enter C,
or for Fahrenheit to Celsius conversion enter F`);

// The inputed value for degrees is converted to a number
let numberOfDegrees = parseFloat(prompt(`Enter the value of degrees you want to be converted`));

// If the input is not a number, the user will get an alert
if (!Number.isNaN(numberOfDegrees)) {
    switch (celsiusOrFahrenheit.toUpperCase()){
        case "C":
            let conversionOne = celsiusToFahrenheit(numberOfDegrees);
            console.log(conversionOne);
            alert(`${numberOfDegrees} degrees Celsius is ${conversionOne} degrees Fahrenheit.`);
        break;
        case "F":
            let conversionTwo = fahrenheitToCelsius(numberOfDegrees);
            console.log(conversionTwo);
            alert(`${numberOfDegrees} degrees Fahrenheit is ${conversionTwo} degrees Celsius.`);
        break
        default:
            alert ('You entered an invalid letter! Please choose C or F!');
        break;
    }
} else {
    alert ("You entered an invalid number!");
}
