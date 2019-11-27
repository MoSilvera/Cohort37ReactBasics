import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./user.png')} alt="A customer" />
          </picture>
          <h3>Name: <span className="card-petname">Jennifer</span></h3>
          <p>Breed: Poodle</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard