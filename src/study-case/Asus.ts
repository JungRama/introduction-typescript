import BaseLaptop from './BaseLaptop'

class Asus<T> extends BaseLaptop<T> {
    constructor(type: T, numberic: boolean, touchButton: boolean) {
        super("Asus", type, numberic, touchButton)
    }
}

export default Asus