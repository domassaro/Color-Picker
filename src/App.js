import React, { Component } from 'react';
import ColorList from "./components/colorList";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sidebar";
import Pagination from "./components/pagination";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  paginate = pageNumber => {
    this.state.loading = true;
    this.state.page = pageNumber;
    this.setState(this.state);
  }; 

  render() {
    let currentCount = 16;
    let page = 1;
    
    return (
        <div>
          <style jsx>{`
            .container {
              height: 100%;
              display: -webkit-box;
              -webkit-box-orient: horizontal;
            }
            .navigation-bar {
              text-align: center;
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
            .sidebar {
              width: auto;
              -webkit-box-flex: 0;
              height:100vh;
            }
            .color-content {
              padding: 50px;
              -webkit-box-flex: 1;
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
              <Sidebar />
            </div>
            <div className="color-content">
              <ColorList />
              <Pagination 
                pageCount={Math.ceil(currentCount / 12)}
                currentPage={page} 
                paginate={this.paginate} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
