import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    name:''
  }
}

changeName(input) {
  this.setState ({
    name: input
  })
}

render() {
  return (
    <div>
      <h1>Rechner</h1>      
      <Calculator />
      {/* <InsertName onClick={(inputValue) => this.changeName(inputValue)} />
      <Greeter name={this.state.name} /> */}
    </div>
  );
}
  
}

export default App;
