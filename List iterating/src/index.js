import React from 'react';
import ReactDOM from 'react-dom';

function Employee(props) {
  return <div style={{border:"3px solid red"}}>
    <p>Employee ID : <b>{props.data.Id}</b></p>

    <p>Employee Name : <b>{props.data.Name}</b></p>

    <p>Employee Location : <b>{props.data.Location}</b></p>

    <p>Employee Salary : <b>{props.data.Salary}</b></p>
  </div>;

}

function DisplayEmployees(props){
  const empList=props.employeeList;

  const listElements = empList.map((emp) =>
    <Employee key={emp.Id}  data={emp} ></Employee>
  );

  return (
    <div>
      {listElements}
    </div>
  );
}
const employees = [

  {Id:101,Name:'Jason',Location:'USA',Salary:125000},

  {Id:102,Name:'Shane',Location:'Colombo',Salary:23000},

  {Id:103,Name:'Alex',Location:'Matara',Salary:34700}

];

const element=<DisplayEmployees employeeList={employees}></DisplayEmployees>

ReactDOM.render(element,document.getElementById('root'));
