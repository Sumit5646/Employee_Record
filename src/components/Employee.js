import React from 'react';
import './Employee.css';

const Employee = ({ employee }) => {
  return (
    <div className="employee-card">
      <h4>{employee.name}</h4>
      <p><span>Age:</span> {employee.age}</p>
      <p><span>Department:</span> {employee.department}</p>
      <p><span>Designation:</span> {employee.designation}</p>
      <p><span>Salary:</span> ₹{employee.salary}</p>
      <p><span>Location:</span> {employee.location}</p>
    </div>
  );
};

export default Employee;
