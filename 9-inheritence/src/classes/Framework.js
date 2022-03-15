import { Language } from "./Language";

export class Framework extends Language {

    // instance variables
    _set;
    _stack;

    // constructor(id, name, uses, description)
    constructor(set, stack) {
        super();
        this._set = set;
        this._stack = stack;

    }

    // getters
    get getSet() {
        return this._set;
    }

    get getStack() {
        return this._stack;
    }

    // setters
    set changeSet(newSet) {
        if(newSet === "string") {
            return this._set = newSet;
        }
    }

    set changeStack(newStack) {
        if(newStack === "string") {
            return this._stack = newStack;
        }
    }

    // methods
    static determineStack(Framework, stack) {

        if (Framework.getStack === stack) {
            return true;
        }
    }

}