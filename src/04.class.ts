// PUBLIC => CAN ACCESS BY ALL INSIDE OR OUTSIDE OF THE CLASS
// PROTECTED => ONLY CAN ACCESS ON THAT CLASS AND INHERITANCE CLASS
// PRIVATE => ONLY CAN ACCESS BY CLASS ITSELF

/* ---------------------------------- CLASS --------------------------------- */
export class User {
    name: string

    constructor(name: string, public age: number) {
        this.name = name
    }

    setName = (value: string): void => {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

/* ---------------------------- INHERITANCE CLASS --------------------------- */
class Admin extends User {
    read: boolean = true
    write: boolean = true
    phone: string | number
    private _email: string = ""
    static getRoleName:string = "Admin"

    constructor(name: string, age: number, phone: string | number) {
        super(name, age)
        this.phone = phone
    }

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        } 
    }

    set email(value: string){
        if(value.length < 5){
            this._email = "Not Valid"
        }
    }

    get email(): string {
        return this._email
    }
}

let admin = new Admin('Toni', 25, 68123456789)
admin.email = "jungrama.id@gmail.com"
console.log(admin)
console.log(Admin.getRoleName)

/* ----------------------------- ABSTRACT CLASS ----------------------------- */
abstract class Vehicle {
    abstract wheels: number

    start(): void {
        console.log('vehicle starting...')
    }
}

class Car extends Vehicle {
    wheels: number = 4
}

class Motorcyle extends Vehicle {
    wheels: number = 2
}

let car = new Car()
console.log(car.start(), car.wheels);

let motorcyle = new Motorcyle()
console.log(motorcyle.start(), motorcyle.wheels);