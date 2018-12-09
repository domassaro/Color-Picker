import React, { Component } from 'react';
import ColorList from "./components/colorList";
import DetailView from "./components/detailView";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sidebar";
import Pagination from "./components/pagination";
import Colors from "./components/common/colors";

class App extends Component {
  constructor(props) {
    super(props);

    // This should be in a store
    this.state = {
      totalCount: this.props.totalCount,
      page: 1,
      currentColor: null,
    };
  }

  colorDetailSelected = (colorSelected) => {
    this.setState({
      currentColor: colorSelected
    });
    console.log("this is happening");
  }

  paginate = pageNumber => {
    this.setState({
      page: pageNumber,
      loading: true
    });
  }; 
  clearColor = () => {
    this.setState({
      currentColor: null,
    });
  }; 

  render() {
    let colorCount = Colors.length;
    
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
              height: 100vh;
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
              {!this.state.currentColor && <ColorList  
                colorsPresent={this.state.colorsPresent}
                page={this.state.page}
                onClick={(e) => this.colorDetailSelected(e)} />}
              {this.state.currentColor && <DetailView clear={this.clearColor} color={this.state.currentColor}/>}
              <Pagination 
                pageCount={Math.ceil(colorCount / 12)}
                currentPage={this.state.page} 
                paginate={this.paginate} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
