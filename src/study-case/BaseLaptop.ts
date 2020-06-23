import InterfaceLaptop from './InterfaceLaptop'
import * as Keyboard from './Keyboard'

abstract class BaseLaptop<T> implements InterfaceLaptop<T> {
    name: string
    type: T
    withNumberic: boolean
    withTouchButton: boolean

    constructor(
        name: string,
        type: T,
        numberic: boolean,
        touchButton: boolean,
    ){
        this.name = name
        this.type = type
        this.withNumberic = numberic
        this.withTouchButton = touchButton
    }

    a() {
        return Keyboard.a()
    }
}

export default BaseLaptop