import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="centerer">
          <img
            className="camera-stream"
            alt="camera stream"
            src="https://cam.peteruithoven.nl/?action=stream"
          />
        </div>
      </div>
    );
  }
}
