import React from 'react'
import { useState } from 'react';

function Calc() {
    const [firstNum, setFirstNumber] = useState(0);
    const [secondNum, setSecondNumber] = useState(0);
    const [operator, setOperator] = useState(0);

    const firstNumber = (value) => {
        console.log(value)
    }



  return (
    <div id="containerCalc">
        <div id='result'>
            box
        </div>
        <table>
            <tbody>
                <tr>
                    <td>
                        <button onClick={()=>firstNumber(1)} >1</button>
                    </td>
                    <td>
                        <button>2</button>
                    </td>
                    <td>
                        <button>3</button>
                    </td>
                    <td>
                        <button>+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>4</button>
                    </td>
                    <td>
                        <button>5</button>
                    </td>
                    <td>
                        <button>6</button>
                    </td>
                    <td>
                        <button>-</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button >7</button>
                    </td>
                    <td>
                        <button>8</button>
                    </td>
                    <td>
                        <button>9</button>
                    </td>
                    <td>
                        <button>*</button>
                    </td>
                </tr>
                <tr>
                    <td  colSpan="2">
                        <button id="equal">=</button>
                    </td>
                    <td>
                        <button>0</button>
                    </td>
                    <td>
                        <button>/</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Calc
