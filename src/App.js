import React, { Component } from 'react';
import Pagination from "./components/pagination";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sidebar";

const selectColor = [
  { name: 'Red' },
  { name: 'Orange' },
  { name: 'Yellow' },
  { name: 'Green' },
  { name: 'Blue' },
  { name: 'Purple' },
  { name: 'Brown' },
  { name: 'Gray' }
];

class App extends Component {
  render() {
    return (
        <div className="container">
          <style jsx>{`
            .navigation-bar {
              text-align: center;
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
            .sidebar {
              display: flex;
              height: 700px;
              flex-grow: 1;
            }

            @media screen and (max-width: 800px) {
              .sidebar {
                flex-direction: column;
              }
            }
          `}</style>

          <NavigationBar />
          <div className="sidebar">
            <Sidebar selectColor={selectColor} />
          </div>
        </div>
    );
  }
}

export default App;
