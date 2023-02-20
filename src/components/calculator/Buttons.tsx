import React, {FunctionComponent} from "react";
import { Command } from "./Calculator";

interface ButtonProps {
    value: Number,
    dvalue: string,
    command?: Command
}


export const Button:FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    

    return <div className="NumberButton"><span>{props.dvalue}</span></div>
}