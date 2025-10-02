import React, { Component } from 'react';
import { employees } from './data/employeesData';
import Employee from './components/Employee';
import './App.css';  // Import custom CSS

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDept: "All"
    };
  }

  handleDepartmentChange = (dept) => {
    this.setState({ selectedDept: dept });
  };

  render() {
    const { selectedDept } = this.state;

    const filterEmployees =
      selectedDept === "All"
        ? employees
        : employees.filter(emp => emp.department === selectedDept);

    return (
      <div className="dashboard-container">
        <h2 className="dashboard-title">Employee Directory</h2>

        {/* Modern Filter Buttons */}
        <div className="button-group">
          {["All", "IT", "HR", "Finance", "Marketing"].map((dept) => (
            <button
              key={dept}
              className={`filter-btn ${selectedDept === dept ? "active" : ""}`}
              onClick={() => this.handleDepartmentChange(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Employees Section */}
        <div className="employee-grid">
          {filterEmployees.length > 0 ? (
            filterEmployees.map(emp => (
              <Employee key={emp.id} employee={emp} />
            ))
          ) : (
            <p className="no-employee">
              No employees found in {selectedDept} department.
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
