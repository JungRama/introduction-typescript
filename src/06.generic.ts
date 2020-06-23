/* ---------------------------- GENERIC FUNCTION ---------------------------- */
function generic<T>(value: T) {
    return value
}

generic("value").length // ONLY HAVE STRING FUNCTION
generic(123).toPrecision // ONLY HAVE NUMBER FUNCTION

const arrowFunction = <T>(value: T) => {
    return value
}

arrowFunction("value").length // ONLY HAVE STRING FUNCTION
arrowFunction(123).toPrecision // ONLY HAVE NUMBER FUNCTION

/* ------------------------------ GENERIC CLASS ----------------------------- */
class List<T> {
    private data: T[]

    constructor(...elements: T[]) {
        this.data = elements
    }

    add(element: T): void {
        this.data.push(element)
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data
    }
}

let numbers = new List<number>(1, 2, 3, 4, 5)
console.log(numbers.add(6));
console.log(numbers.addMultiple(7, 8, 9, 10));
console.log(numbers.getAll());

let random = new List<number | string | boolean>(1, "B", "C", 4)
console.log(random.add("E"));
console.log(random.addMultiple(5, 6, "Z", true));
console.log(random.getAll());