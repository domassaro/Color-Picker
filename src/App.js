import React, { Component } from 'react';
import NavigationBar from "./common/navigationBar";

class App extends Component {
  render() {
    return (
        <div className="App-header">
          <style jsx>{`
            .App-header {
              text-align: center;
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          `}</style>
          <NavigationBar />
        </div>
    );
  }
}

export default App;
