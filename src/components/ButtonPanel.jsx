import React from "react";
import PropTypes from "prop-types";
import "./Button.css"


export default class ButtonPanel extends React.Component{
    static propTypes = {
        clickHandler: PropTypes.func,
    }
    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName)
    }
    render(){
        return(
            <div className="component-button-panel">
                <div>
                    <button name="AC" onClick={this.handleClick}>AC</button>
                    <button name="+/-" onClick={this.handleClick}>+/-</button>
                    <button name="%" onClick={this.handleClick}>%</button>
                    <button name="÷" onClick={this.handleClick}>÷</button>
                </div>
                <div>
                    <button name="7" onClick={this.handleClick}>7</button>
                    <button name="8" onClick={this.handleClick}>8</button>
                    <button name="9" onClick={this.handleClick}>9</button>
                    <button name="x" onClick={this.handleClick}>x</button>
                </div>
                <div>
                    <button name="4" onClick={this.handleClick}>4</button>
                    <button name="5" onClick={this.handleClick}>5</button>
                    <button name="6" onClick={this.handleClick}>6</button>
                    <button name="-" onClick={this.handleClick}>-</button>
                </div>
                <div>
                    <button name="1" onClick={this.handleClick}>1</button>
                    <button name="2" onClick={this.handleClick}>2</button>
                    <button name="3" onClick={this.handleClick}>3</button>
                    <button name="+" onClick={this.handleClick}>+</button>
                </div>
                <div>
                    <button name="0" onClick={this.handleClick}>0</button>
                    <button name="." onClick={this.handleClick}>.</button>
                    <button name="=" onClick={this.handleClick}>=</button>
                </div>
            </div>
        )
    }
}