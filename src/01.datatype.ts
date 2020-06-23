/* --------------------------------  STRING ------------------------------- */
let myName: string = "Jung Rama"
myName = "Oh Hell Yeah, Iam Cute"

/* --------------------------------  NUMBER ------------------------------- */
let age: number = 25
age = 18

/* -------------------------------  BOOLEAN ------------------------------- */
let isTaken: boolean = true
isTaken = false

/* ----------------------------------- ANY ---------------------------------- */
let hobbies: any = "Football"
hobbies = ['Football', 'Eat']

/* -------------------------------- ARRAY -------------------------------- */
// STRING
let arrayString: string[]
arrayString = ['Hello', 'My', 'Name', 'Is']
// NUMBER
let arrayNumber: number[]
arrayNumber = [1, 2, 3, 4, 5]
// ANY
let arrayAny: any[]
arrayAny = ['String', 1, "String 2", 3, { name: 'Jung Rama' }]
// TUPLE
let arrayTuple: [string, number]
arrayTuple = ["Bali", 80231]

/* ---------------------------------- ENUM ---------------------------------- */
// NUMERIC ENUM
enum MonthIndex {
    JAN = 1,
    FEB,
    MAR
}
// CONSOLE OUTPUT : MonthIndex.Jan = 1

// STRING ENUM
enum MonthString {
    JAN = "January",
    FEB = "February",
    MAR = "March"
}
// CONSOLE OUTPUT : MonthString.Jan = January

/* ------------------------------- UNION TYPE ------------------------------- */
let phone: number | string
phone = 628123456789
phone = "08123456789"