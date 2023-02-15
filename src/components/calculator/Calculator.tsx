import React, { FunctionComponent } from 'react';
import { Display } from './Display';
import { Button, ButtonProps, Buttons } from './Buttons';
import { useState } from 'react';


export abstract class Command {
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


type CalcProps = {
    value1: Number,
    value2: Number,
    result: Number,

    //num_buttons: [FunctionComponent]
  }


  export const Calculator: FunctionComponent = () => {
    
    const [result, setResult] = useState<Number>(1)
    

    return <div className='calculator'>
      <Display value1={1} value2={2} result={result} operation={"+"}/>
      <Buttons commands={[]}></Buttons>
    </div>
  }