import React from 'react';
import ReactDOM from 'react-dom';

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      updateSalary:null
    };
  }

  getUpdatedSalary=(salary)=>{
    this.setState({updatedSalary:salary});
  }

  render(){
    return <div>
      <h1>Employee Component</h1>
      <p>
        <label>Id : {this.props.id} </label>
      </p>
      <p>
        <label>Name : {this.props.name}</label>
      </p>
      <p>
        <label>Salary : {this.props.salary} </label>
      </p>
      <p>
        <label>Location : {this.props.location} </label>
      </p>
      <p>
        <label>Updated total salary : {this.state.updatedSalary} </label>
      </p>
      <Salary BasicSalary={this.props.BasicSalary} hra={this.props.hra} specialAllowance={this.props.specialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary> 

    </div>
  }
}

class Salary extends React.Component{
  constructor(props){
    super(props);
    this.state={
     basic:this.props.BasicSalary,
     hr:this.props.hra,
     sp:this.props.specialAllowance,
    };
  }

updateSalary=()=>{
  let salary=parseInt(this.refs.bas.value)+parseInt(this.refs.hhr.value)+parseInt(this.refs.sa.value);

  this.props.onSalaryChanged(salary);
}
render(){
  return <div>
    <h1>Salary Details</h1>
      <p>
        <label>Basic Salary : <input type="text" ref="bas" defaultValue={this.state.basic}></input> </label>
      </p>
      <p>
        <label>HRA : <input type="text" ref="hhr" defaultValue={this.state.hr}></input></label>
      </p>
      <p>
        <label>Special <input type="text" ref="sa" defaultValue={this.state.sp}></input> </label>
      </p>
      <button onClick={this.updateSalary}> update </button>



  </div>
}

}

const element=<Employee id="112" name="saman" salary="20000" location="galle" BasicSalary="20000" hra="5000" specialAllowance="2000"></Employee>

ReactDOM.render(element,document.getElementById("root"));