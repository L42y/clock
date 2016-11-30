import React, { Component } from 'react';
import {Col} from 'jsxstyle';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <Col className="App"
           minHeight="100vh"
           alignItems="center"
           justifyContent="center">
        <Clock/>
      </Col>
    );
  }
}

export default App;
