import React, {FunctionComponent, useEffect} from "react";
import { useState } from "react";

type display = {
    "value1": Number,
    "value2": Number,
    "result": Number,
    "operation": String,
}

export const Display:FunctionComponent<display> = ({value1, value2, result, operation}) => {
    
    
    
    return <div className="display">{value1.toString()}</div>
}