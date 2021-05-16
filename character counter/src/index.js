import React from 'react';
import ReactDOM from 'react-dom';

class Countcharacters extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:""
    };
  }

  onMessageChange(text){
    this.setState({
      message:'Message has ' + text.length+ ' no of characters',
    });
  }
  render(){
    return <div>
      <h2>Welcome to count character.....</h2>
      <p>
        <label>Enter Message : <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input></label>

      </p>
      <p>
        <label>{this.state.message}</label>
      </p>
      <p>
        <label>{this.state.counter}</label>
      </p>

      </div>
  }
}
class Employee extends React.Component{
  state={counter:0};
  addEmployee=()=>{
    this.setState({counter:this.state.counter+1});
    // this.counter=this.counter+1;
    // alert("Adding a new employee");
    // alert("Add employee button is clicked " + this.counter+" times");

  }
  render(){
    return <div>
      <h2>Welcome to employee component....</h2>
      <p>
        <button onClick={this.addEmployee}> Add Employee</button>
      </p>  
      <p>
        Add employee button is clicked : {this.state.counter} times
      </p>
    </div>
  }

}

const element=<Countcharacters></Countcharacters>
ReactDOM.render(element,document.getElementById("root"));