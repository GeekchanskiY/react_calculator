import React, {FunctionComponent} from "react";

abstract class Command {
    abstract execute(): number
}

class AddCommand extends Command {
    a: number;
    b: number;
    constructor(a: number, b: number) {
        super();
        this.a = a
        this.b = b
    }

    execute() {
         return this.a + this.b
    }
}

type ButtonType = {
    "size": String,
    "isFunctional": boolean
}

type ButtonProps = {
    "value": Number,
    "buttonType": ButtonType,
    "displayValue": Number,
    "callbackFunction": (value: Number, buttonType: ButtonType) => null
}

export const Button:FunctionComponent<ButtonProps> = ({value, buttonType, displayValue, callbackFunction}) => {
    return <div></div>
}