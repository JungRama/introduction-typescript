"use strict";
/* --------------------------------  STRING ------------------------------- */
var myName = "Jung Rama";
myName = "Oh Hell Yeah, Iam Cute";
/* --------------------------------  NUMBER ------------------------------- */
var age = 25;
age = 18;
/* -------------------------------  BOOLEAN ------------------------------- */
var isTaken = true;
isTaken = false;
/* ----------------------------------- ANY ---------------------------------- */
var hobbies = "Football";
hobbies = ['Football', 'Eat'];
/* -------------------------------- ARRAY -------------------------------- */
// STRING
var arrayString;
arrayString = ['Hello', 'My', 'Name', 'Is'];
// NUMBER
var arrayNumber;
arrayNumber = [1, 2, 3, 4, 5];
// ANY
var arrayAny;
arrayAny = ['String', 1, "String 2", 3, { name: 'Jung Rama' }];
// TUPLE
var arrayTuple;
arrayTuple = ["Bali", 80231];
/* ---------------------------------- ENUM ---------------------------------- */
// NUMERIC ENUM
var MonthIndex;
(function (MonthIndex) {
    MonthIndex[MonthIndex["JAN"] = 1] = "JAN";
    MonthIndex[MonthIndex["FEB"] = 2] = "FEB";
    MonthIndex[MonthIndex["MAR"] = 3] = "MAR";
})(MonthIndex || (MonthIndex = {}));
// CONSOLE OUTPUT : MonthIndex.Jan = 1
// STRING ENUM
var MonthString;
(function (MonthString) {
    MonthString["JAN"] = "January";
    MonthString["FEB"] = "February";
    MonthString["MAR"] = "March";
})(MonthString || (MonthString = {}));
// CONSOLE OUTPUT : MonthString.Jan = January
/* ------------------------------- UNION TYPE ------------------------------- */
var phone;
phone = 628123456789;
phone = "08123456789";
