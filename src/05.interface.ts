interface Laptop {
    name: string
    on(): void
    off(): void
}

class Asus implements Laptop {
    name: string;
    isGaming: true

    constructor(name: string, isGaming: true) {
        this.name = name
        this.isGaming = isGaming
    }

    on(): void {
        console.log('Asus ON!');
    }
    off(): void {
        console.log('Asus OFF!');
    }
}

class Macbook implements Laptop {
    name: string;
    keyboardLight: true

    constructor(name: string, keyboardLight: true) {
        this.name = name
        this.keyboardLight = keyboardLight
    }

    on(): void {
        console.log('Macbook ON!');
    }
    off(): void {
        console.log('Macbook OFF!');
    }
}

console.log(new Asus('Asus', true).on());
