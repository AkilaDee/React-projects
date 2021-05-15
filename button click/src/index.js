import React from 'react';
import ReactDOM from 'react-dom';


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

const element=<Employee></Employee>
ReactDOM.render(element,document.getElementById("root"));