import React from 'react'

export default class InsertName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            placeholder: 'Name'
        }
    }

    handleInputText(input) {
        this.setState({ inputText: input })
        window.console.log(input);
    }

    render() {
        return (
            <div>
                <label for="ipName" className="lblName">{this.state.inputText}</label>
                <input id="ipName" className="form-control" placeholder={this.state.placeholder} onChange={event => this.handleInputText(event.target.value)} />

                <button className="btn btn-primary btnGreeter" onClick={() => this.props.onClick(this.state.inputText)}>Begrüßen</button>

            </div>
        );
    }
}