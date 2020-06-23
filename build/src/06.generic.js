"use strict";
/* ---------------------------- GENERIC FUNCTION ---------------------------- */
function generic(value) {
    return value;
}
generic("value").length; // ONLY HAVE STRING FUNCTION
generic(123).toPrecision; // ONLY HAVE NUMBER FUNCTION
var arrowFunction = function (value) {
    return value;
};
arrowFunction("value").length; // ONLY HAVE STRING FUNCTION
arrowFunction(123).toPrecision; // ONLY HAVE NUMBER FUNCTION
/* ------------------------------ GENERIC CLASS ----------------------------- */
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List(1, 2, 3, 4, 5);
console.log(numbers.add(6));
console.log(numbers.addMultiple(7, 8, 9, 10));
console.log(numbers.getAll());
var random = new List(1, "B", "C", 4);
console.log(random.add("E"));
console.log(random.addMultiple(5, 6, "Z", true));
console.log(random.getAll());
