import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employees.jpg')} alt="An Employee" />
          </picture>
          <h3>Name: <span className="card-petname">Joe</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard