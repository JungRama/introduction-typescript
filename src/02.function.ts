// FUNCTION TYPE DATA
function getName(): string { // string | number | any | void : without no return
    return "Hello, my name is Jung Rama"
}
function changeName(): void {
    let name = "Jung Rama"
    name = "No, iam cute boy"
}

// PARAMETER && ARGUMENT
function multiply(valueOne: number, valueTwo: number): number {
    return valueOne * valueTwo
}
const resultMultiply = multiply(100, 30)

// FUNCTION AS TYPE
type add = (valOne: number, valTwo: number) => number
const Add: add = (valueOne: number, valueTwo: number): number => {
    return valueOne + valueTwo
}

/* ---------------------------- DEFAULT PARAMETER --------------------------- */
const fullName = (fName: string, lName: string = "Doe"): string => {
    return fName + " " + lName
}
fullName("John")
fullName("John", "Master")

/* --------------------------- OPTIONAL PARAMETER --------------------------- */
const getAddress = (city: string, province?: string): string => {
    return city + ", " + province
}
console.log(getAddress("Denpasar"));
getAddress("Denpasar", "Bali")