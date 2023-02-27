var Celcius = document.querySelector('#celcius > input')
var Fahrenheit = document.querySelector('#Fahrenheit > input')
var Kelvin = document.querySelector('#Kelvin > input')

var btn = document.querySelector('.button button');

function roundNumber(num) {
    return Math.round(num * 100) / 100;
}


Celcius.addEventListener("input", function () {
    let cTemp = parseFloat(Celcius.value)
    let fTemp = (cTemp * (9 / 5)) + 32;
    let kTemp = cTemp + 273.15;

    Fahrenheit.value = roundNumber(fTemp);
    Kelvin.value = roundNumber(kTemp);
})

Fahrenheit.addEventListener("input", function () {
    let fTemp = parseFloat(Fahrenheit.value)
    let cTemp = (fTemp - 32) * (5 / 9);
    let kTemp = cTemp + 273.15;

    Celcius.value = roundNumber(cTemp);
    Kelvin.value = roundNumber(kTemp);
})

Kelvin.addEventListener("input", function () {
    let kTemp = parseFloat(Kelvin.value)
    let cTemp = kTemp - 273.15;
    let fTemp = (cTemp * (9 / 5)) + 32;

    Fahrenheit.value = roundNumber(fTemp);
    Celcius.value = roundNumber(cTemp);
})

btn.addEventListener("click", function () {
    Celcius.value = '';
    Fahrenheit.value = '';
    Kelvin.value = '';
})
