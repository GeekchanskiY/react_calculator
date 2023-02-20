import React, { FunctionComponent } from 'react';
import { Display } from './Display';
import { Button } from './Buttons';
import { useState } from 'react';
import { type } from 'os';


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
       return this.a + this.b;
  }
}

class MinusCommand extends Command {
  a: number;
  b: number;
  constructor(a: number, b:number){
    super();
    this.a = a
    this.b = b
  }
  execute(): number {
    return this.a - this.b;
  }
}


type CalcProps = {
    value1: Number,
    value2: Number,
    result: Number,

    //num_buttons: [FunctionComponent]
  }


  export const Calculator: FunctionComponent = () => {
    
    const [result, setResult] = useState<Number>(0)
    const [value1, setValue1] = useState<Number>(0)
    const [value2, setValue2] = useState<Number>(0)

    let activeInput: Number = new Number(0)
    console.log(typeof(MinusCommand))
    return <div className='calculator'>
      <Display value1={value1.toString()} value2={value2.toString()} result={result.toString()} operation={"+"}/>
      <div className='NumberButtons'>
        {[1,2,3,4,5,6,7,8,9,0].map((el, index) => {
          return <Button value={el} dvalue={el.toString()} key={"numbutton"+el.toString()}></Button>
        })}
      </div>
      
    </div>
  }