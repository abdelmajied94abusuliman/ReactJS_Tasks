import React from "react";

export class Child extends React.Component {
    render() {

        const style = {
            backgroundColor : "red"
        }
        
        return <div id="headerrr" style={{ ...style , fontSize : "100px" }}>"This Should Be Header In Future"</div>
    }
}