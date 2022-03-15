import { Language } from "./Language.js";

export class Framework extends Language {

    // instance variables
    _set;
    _stack;

    // constructor(id, name, uses, description)
    constructor(id, name, uses, description, set, stack) {
        super(id, name, uses, description);
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