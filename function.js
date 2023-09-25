//exercise A
//exercise 1
let foerste = [5,6,3,4,6,34,5,5]
let anden = [5,5,5,66,7,3,1,1,1,4]
const numre = foerste.concat(anden);

 let sortedArray = numre.sort();
console.log(sortedArray);

//exercise 2
let number = "22";
let number2 = "22";
let parsedNumber = parseInt(number, 10);
let parsedNumber2 = parseInt(number2, 10);

console.log(parsedNumber + parsedNumber2);

//exercise 3

//exercise B
function opgaveEt(hello) {
    console.log(hello);
}

opgaveEt("Hello World");

//exercise 1.1
function sumTwoNumbers(a,b) {
    return a + b;
}
const returnedNumber = sumTwoNumbers(2, 6);
console.log(returnedNumber);

//exercise 2
function someFunctionName(name) {
    return name[0].toLowerCase() === 'a';
}
console.log(Array('kea'));
console.log(someFunctionName('anna'));

//exercise 3

//Create the initial javascript like this:
participants = ["nicklas;33", "benjamin;44", "lars;55"];
let sum = 0;
for (let i = 0; i < participants.length; i++) {
    let currentElement = participants[i];
    let currentElementAsarray = currentElement.split(";");
    let currentElementnumberonly = parseInt(currentElementAsarray[1])
    sum = sum + currentElementnumberonly
    console.log(sum)

//exercise 3a
function celciusToFahrenheit(celcius) {
    Fahrenheit = celcius * 1.8 + 32;
    return Fahrenheit;
}

console.log(celciusToFahrenheit(30 ));

//exercise 3B
function fahrenheitToCelcius(fahrenheit) {
   celcius = (fahrenheit - 32) / 1.8;
    return celcius;
}

console.log(fahrenheitToCelcius(30));

//exercise 3c
function convertTemperature(inputScale, degrees) {
    if (inputScale === "Fahrenheit") {
        console.log( celciusToFahrenheit(degrees));
    } else if (inputScale === "celsius") {
        console.log( fahrenheitToCelcius(degrees));
    } else {
        console.log("Invalid input");
    }
}

convertTemperature("Fahrenheit", 25);

//exercise 4
function increaseByHalf (number) {
let tal =  number * 1.5
    return tal
}

console.log(increaseByHalf(50));

//exercise 5
// 1. 2
// 2. 1
// 3. x
// 4. name

//exercise 6
function OpgaveSeks(stringToLog, numberOfTimesToLog){
    if (numberOfTimesToLog > stringToLog.length) {
        console.log("Invalid parameters");
} else {
        for (let i = 0; i < numberOfTimesToLog; i++) {
            console.log(stringToLog);
        }
    }
}
OpgaveSeks('hello', 3);


