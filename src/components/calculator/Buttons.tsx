import React, {FunctionComponent} from "react";
import { Command } from "./Calculator";


// size from 1 to 3 - widget display size
// isFunctional - True for numeric buttons, False for functional
type ButtonType = {
    "size": Number,
    "isFunctional": boolean
}

export type ButtonProps = {
    "value": Number,
    "buttonType": ButtonType,
    "displayValue": String,
    "callbackF": (value: Number, buttonType: ButtonType) => null
}

type ButtonsProps = {
    commands: Command[]
}


export const Button:FunctionComponent<ButtonProps> = ({value, buttonType, displayValue, callbackF}) => {
    return <div className="button">
        {displayValue}
    </div>
}

export const Buttons:FunctionComponent<ButtonsProps> = () => {
    const numeric_button_type: ButtonType = {size: 1, isFunctional: false}  
    let i: Number, el: String;
    let numeric_buttons_data: ButtonProps[] = []
    let a = "123456789".split('').map((el, i) => {numeric_buttons_data.push({value: Number(el), buttonType: numeric_button_type, displayValue: el, callbackF: (value, buttonType) => {return null}})} )
    
    let buttons: FunctionComponent<ButtonProps>[] = []

    return <div></div>
}