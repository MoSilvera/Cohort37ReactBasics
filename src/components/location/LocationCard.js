import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.png')} alt="My Dog" />
          </picture>
          <h3><span className="card-petname">Pupper Palace</span></h3>
          <p>Address: 123 waggles way</p>
        </div>
      </div>
    );
  }
}

export default LocationCard