import React, {FunctionComponent, useEffect} from "react";
import { useState } from "react";

interface Display {
    values: string[],
    result: string,
    operations: string[],
}

export const Display:FunctionComponent<Display> = (props: Display) => {
    
    return <div className="display">
            <div className="operationrow"></div>
            <div className="resultrow">{props.result}</div>
        </div>
}