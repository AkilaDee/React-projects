import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';

// const element=React.createElement("h1",null,"wellcome to react");
// ReactDOM.render(element,document.getElementById("root"));

// const element=React.createElement("div",{className:"testclass"},
// React.createElement("h1",null,"Bacause when the sun shines"),
// React.createElement("h1",null,"we shine together"));

// ReactDOM.render(element,document.getElementById("root"));


const DisplayEmployeeInfo=(employee)=>{
  return <div>
      <p>
        <label> employee id :<b> {employee.id}</b> </label>
      </p>
      <p>
        <label> employee Name :<b> {employee.name}</b> </label>
      </p>
      <p>
        <label> employee Salary :<b> {employee.salary}</b> </label>
      </p>
      <DepartmentInfo depid={employee.depid} depname={employee.depname} />
  </div>;
}
const DepartmentInfo=(department)=>{
  return <div>
  <p>
    <label> department id :<b> {department.depid}</b> </label>
  </p>
  <p>
    <label> department name :<b> {department.depname}</b> </label>
  </p>
  </div>;
}

const element=<DisplayEmployeeInfo id="1029" name="saman" salary="20000" depid="500" depname="Matara"></DisplayEmployeeInfo>

ReactDOM.render(element,document.getElementById("root"));
// const element=<h1 className="testclass">Welcome to uso penetensary</h1>;

// ReactDOM.render(element,document.getElementById("root"));


// const newElement=<h1 className="testclass">Fortune favours the brave</h1>;

// ReactDOM.render(newElement,document.getElementById("root1"));

// const element=(
//   <div className="testclass">
//     <h1>Welcome to uso penetensary</h1>
//     <h1>Fortune favours the brave</h1>
//   </div>
// )

// reactDom.render(element,document.getElementById("root"));