import React, { FunctionComponent } from 'react';

type CalcProps = {
    value1: Number,
    value2: Number,
    result: Number
  }


  export const Calculator: FunctionComponent<CalcProps> = ({value1=null, value2=null, result=null}) => {
    return <div>asd</div>
  }