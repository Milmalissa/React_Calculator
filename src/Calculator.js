import React from 'react'

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputCalculate: ''
        }
    }

    handleNumberSignClicks(btn) {
        let inputText = this.state.inputCalculate;
        btn = inputText + btn
        this.setState({inputCalculate: btn});
    }

    clearTextbox() {
        this.setState({inputCalculate: ''})
    }

    calculate()
    {
        let inputText = this.state.inputCalculate;
        let result = eval(inputText);
        this.setState({inputCalculate: result});
    }

    render() {
        return (
            <div className="container" id="calculator">
                <div className="row">
                    <input type="text" className="form-control" id="itCalculate" defaultValue={this.state.inputCalculate} readOnly />
                </div>
                <div className="row">
                    <button type="button" id="7" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">7</button>

                    <button type="button" id="8" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">8</button>

                    <button type="button" id="9" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">9</button>

                    <button type="button" id="*" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-primary">*</button>

                </div>
                <div className="row">

                    <button type="button" id="4" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">4</button>

                    <button type="button" id="5" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">5</button>

                    <button type="button" id="6" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">6</button>

                    <button type="button" id="/" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-primary">/</button>

                </div>
                <div className="row">

                    <button type="button" id="1" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">1</button>

                    <button type="button" id="2" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">2</button>

                    <button type="button" id="3" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">3</button>

                    <button type="button" id="-" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-primary">-</button>

                </div>
                <div className="row">
                    <button type="button" id="," onClick={event => this.clearTextbox()} className="btn btn-primary">C</button>

                    <button type="button" id="0" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-outline-primary">0</button>

                    <button type="button" id="=" onClick={event => this.calculate()} className="btn btn-primary">=</button>

                    <button type="button" id="+" onClick={event => this.handleNumberSignClicks(event.target.id)} className="btn btn-primary">+</button>

                </div>
            </div>
        );
    }
}