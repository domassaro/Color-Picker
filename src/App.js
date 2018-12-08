import React, { Component } from 'react';
import ColorList from "./components/colorList";
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
        <div>
          <style jsx>{`
            .container {
              height: 100%;
              display: -ms-flexbox;
              display: -webkit-box;
              display: -moz-box;
              display: -ms-box;
              display: box;
              
              -ms-flex-direction: row;
              -webkit-box-orient: horizontal;
              -moz-box-orient: horizontal;
              -ms-box-orient: horizontal;
              box-orient: horizontal;
            }
            .navigation-bar {
              text-align: center;
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
            .sidebar {
              height: 800px;
              width: auto;
              -ms-flex: 0 100px;
              -webkit-box-flex:  0;
              -moz-box-flex:  0;
              -ms-box-flex:  0;
              box-flex:  0;  
            }
            .color-content {
              padding: 50px;
              -ms-flex: 1;
              -webkit-box-flex: 1;
              -moz-box-flex: 1;
              -ms-box-flex: 1;
              box-flex: 1;  
            }

            @media screen and (max-width: 800px) {
              .sidebar {
                flex-direction: column;
              }
            }
          `}</style>

          <NavigationBar />
          <div className="container">
            <div className="sidebar">
              <Sidebar selectColor={selectColor} />
            </div>
            <div className="color-content">
              <ColorList />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
