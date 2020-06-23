import BaseLaptop from './BaseLaptop'

class Macbook<T> extends BaseLaptop<T> {
    constructor(type: T, numberic: boolean, touchButton: boolean) {
        super("Macbook", type, numberic, touchButton)
    }
}

export default Macbook