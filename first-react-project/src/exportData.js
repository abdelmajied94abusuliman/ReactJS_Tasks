import React from 'react';

export const x = "React JS X";
export const y = "React JS Y";
export const z = "React JS Z";

export class Child extends React.Component {
    componentDidMount
    render() {
        return <h1>This Component from Outside File Using Export and Import</h1>;
    }
}

export function sayHello() {
    return "Hello React JS , I am happy to Deal With You";
}


// function defaultFunctionExp() {
//     return "Default Export Function";
// }

// export default defaultFunctionExp;

const w = "React JS W";

export default w;