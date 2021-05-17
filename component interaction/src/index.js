import React from 'react';
import ReactDOM from 'react-dom';

const EmployeeContext=React.createContext();
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:{
        id:101,
        name:'Saman',
        location:'kandy',
        salary:120000
      }
    };
  }
   
  changeEmployeeData=()=>{
    this.setState({data:{id:102}});
  }
  render(){
    return <div>
        <h1>App component</h1>
        <p>employee id:{this.state.data.id}</p>
        <EmployeeContext.Provider value={this.state.data}>
      <Employee />
    </EmployeeContext.Provider> 
    <p>
      <button onClick={this.changeEmployeeData}>Update</button>
    </p>
          
        
    </div>
  }
}


class Employee extends React.Component{
  static contextType=EmployeeContext;
   render(){
    return <div>
      <h1>Employee Component</h1>
      <p>
        <label>employee id:{this.context.id}</label>
        </p>

    <Salary></Salary>
    </div>
  }
}

class Salary extends React.Component{
  static contextType=EmployeeContext;

  render(){
    return <div>
      <h1>Salary Component</h1>
      <p>employee id:{this.context.id}</p>

    </div>
  }
}
const element=<App></App>

ReactDOM.render(element,document.getElementById("root"));