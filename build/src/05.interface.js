"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log('Asus ON!');
    };
    Asus.prototype.off = function () {
        console.log('Asus OFF!');
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log('Macbook ON!');
    };
    Macbook.prototype.off = function () {
        console.log('Macbook OFF!');
    };
    return Macbook;
}());
console.log(new Asus('Asus', true).on());
