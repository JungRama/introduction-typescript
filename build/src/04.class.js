"use strict";
// PUBLIC => CAN ACCESS BY ALL INSIDE OR OUTSIDE OF THE CLASS
// PROTECTED => ONLY CAN ACCESS ON THAT CLASS AND INHERITANCE CLASS
// PRIVATE => ONLY CAN ACCESS BY CLASS ITSELF
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* ---------------------------------- CLASS --------------------------------- */
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.setName = function (value) {
            _this.name = value;
        };
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    return User;
}());
exports.User = User;
/* ---------------------------- INHERITANCE CLASS --------------------------- */
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, phone) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = "Not Valid";
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
var admin = new Admin('Toni', 25, 68123456789);
admin.email = "jungrama.id@gmail.com";
console.log(admin);
console.log(Admin.getRoleName);
/* ----------------------------- ABSTRACT CLASS ----------------------------- */
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.start = function () {
        console.log('vehicle starting...');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 4;
        return _this;
    }
    return Car;
}(Vehicle));
var Motorcyle = /** @class */ (function (_super) {
    __extends(Motorcyle, _super);
    function Motorcyle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 2;
        return _this;
    }
    return Motorcyle;
}(Vehicle));
var car = new Car();
console.log(car.start(), car.wheels);
var motorcyle = new Motorcyle();
console.log(motorcyle.start(), motorcyle.wheels);
