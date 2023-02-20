import React, {FunctionComponent, useEffect} from "react";
import { useState } from "react";

interface Display {
    value1: string,
    value2: string,
    result: string,
    operation: string,
}

export const Display:FunctionComponent<Display> = (props: Display) => {
    
    
    
    return <div className="display">
        <div className="operationrow"></div>
        <div className="resultrow"></div>
        <div className="displaydiv value"><span>{props.value1}</span></div>
        <div className="displaydiv operation"><span>{props.operation}</span></div>
        <div className="displaydiv value"><span>{props.value2}</span></div>
        <div className="displaydiv"><span>=</span></div>
        <div className="displaydiv result"><span>{props.result}</span></div>
        
        </div>
}