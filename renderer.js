function celciusToFahrenheit(){
     celcius = document.getElementById('celcius').value;
     fahrenheit = (celcius* 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;

}

function fahrenheitToCelcius(){
     fahrenheit = document.getElementById('fahrenheit').value;
     celcius = (fahrenheit - 32) * 5/9
    document.getElementById('celcius').value = celcius;
}