import React, { Component } from 'react'

export class NormalCalc extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstNum : 0,
            secondNum : 0,
            operator : "",
            sum : ""
        }
    }



  render() {


    const testing = (e) => {
        e.preventDefault();
        if (document.getElementById("select").value == "+"){
            this.setState({
                firstNum : document.getElementById("fn").value,
                secondNum : document.getElementById("sn").value,
                operator :document.getElementById("select").value,
                sum : parseInt(document.getElementById("fn").value) + parseInt(document.getElementById("sn").value)
            })
        } else if (document.getElementById("select").value == "-") {
            this.setState({
                firstNum : document.getElementById("fn").value,
                secondNum : document.getElementById("sn").value,
                operator :document.getElementById("select").value,
                sum : parseInt(document.getElementById("fn").value) - parseInt(document.getElementById("sn").value)
            })
        } else if (document.getElementById("select").value == "*") {
            this.setState({
                firstNum : document.getElementById("fn").value,
                secondNum : document.getElementById("sn").value,
                operator :document.getElementById("select").value,
                sum : parseInt(document.getElementById("fn").value) * parseInt(document.getElementById("sn").value)
            })
        } else if (document.getElementById("select").value == "/") {
            this.setState({
                firstNum : document.getElementById("fn").value,
                secondNum : document.getElementById("sn").value,
                operator :document.getElementById("select").value,
                sum : parseInt(document.getElementById("fn").value) / parseInt(document.getElementById("sn").value)
            })
        } else {
            return "Your Operator is Wrong"
        }


        document.getElementById("result").style.display = "block"

    }


    return (
      <div>
        <form action="">
            <label htmlFor="">First Number</label>
            <input id='fn' type="text" placeholder='First Number' /><br />
            <label htmlFor="">Second Number</label>
            <input id='sn' type="text" placeholder='Second Number' /><br />
            <select name="" id="select">
                <option defaultValue >Please Select</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select><br /><br />
            <button onClick={(e)=>testing(e)}>=</button>
        </form>
        <p id='result' style={{display : 'none'}}><span>{this.state.firstNum} </span> <span>{this.state.operator} </span> <span> {this.state.secondNum}</span> = {this.state.sum}
        </p>
      </div>
    )
  }
}

export default NormalCalc
