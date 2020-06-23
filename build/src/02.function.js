"use strict";
// FUNCTION TYPE DATA
function getName() {
    return "Hello, my name is Jung Rama";
}
function changeName() {
    var name = "Jung Rama";
    name = "No, iam cute boy";
}
// PARAMETER && ARGUMENT
function multiply(valueOne, valueTwo) {
    return valueOne * valueTwo;
}
var resultMultiply = multiply(100, 30);
var Add = function (valueOne, valueTwo) {
    return valueOne + valueTwo;
};
/* ---------------------------- DEFAULT PARAMETER --------------------------- */
var fullName = function (fName, lName) {
    if (lName === void 0) { lName = "Doe"; }
    return fName + " " + lName;
};
fullName("John");
fullName("John", "Master");
/* --------------------------- OPTIONAL PARAMETER --------------------------- */
var getAddress = function (city, province) {
    return city + ", " + province;
};
console.log(getAddress("Denpasar"));
getAddress("Denpasar", "Bali");
