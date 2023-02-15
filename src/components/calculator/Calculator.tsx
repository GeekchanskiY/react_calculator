import React, { FunctionComponent } from 'react';
import { Display } from './Display';


type CalcProps = {
    value1: Number,
    value2: Number,
    result: Number,

    num_buttons: [FunctionComponent]
  }


  export const Calculator: FunctionComponent<CalcProps> = ({value1=null, value2=null, result=null}) => {
    

    return <div className='calculator'>
      <Display value1={1} value2={2} result={3} operation={"+"}/>
    </div>
  }