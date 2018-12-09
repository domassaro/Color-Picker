import React, { Component } from 'react';
import ColorList from "./components/colorList";
import DetailView from "./components/detailView";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sidebar";
import Pagination from "./components/pagination";
import Colors from "./components/common/colors";
import * as mobxReact from 'mobx-react';
import * as mobx from 'mobx';
import chromaJs from "chroma-js";

const colorsStore = mobx.observable({
    currentColorSelected : null,
     currentPage : null
});

colorsStore.selectColor = function(color) {
    colorsStore.currentColorSelected = color;
};

function getCurrentColor() {
    return colorsStore.currentColorSelected;
}


class App extends Component {
  constructor(props) {
    super(props);

    // This should be in a store
    this.state = {
      totalCount: this.props.totalCount,
      page: 1,
    };
  }

  handleRandomClick = () => {
      let randomColor = chromaJs.random().name();
      colorsStore.selectColor(randomColor);
  }

  colorDetailSelected = (colorSelected) => {
    colorsStore.selectColor(colorSelected);
  }

  paginate = pageNumber => {
    this.setState({
      page: pageNumber,
      loading: true
    });
  }; 
  clearColor = () => {
    colorsStore.selectColor(null);
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
            .color-content {
              text-align: center;
              padding: 50px;
              -webkit-box-flex: 1;
            }
          `}</style>

          <NavigationBar />
          <div className="container">
            <Sidebar handleRandomClick={(e) => this.handleRandomClick(e)} />
            <div className="color-content">
              {!getCurrentColor() && <ColorList  
                colorsPresent={this.state.colorsPresent}
                page={this.state.page}
                onClick={(e) => this.colorDetailSelected(e)} />}
              {getCurrentColor() && <DetailView clear={this.clearColor} color={getCurrentColor()}/>}
              <Pagination 
                pageCount={Math.floor(colorCount / 12)}
                currentPage={this.state.page} 
                paginate={this.paginate} />
            </div>
          </div>
        </div>
    );
  }
}
var ObservableApp = mobxReact.observer(App);

export default ObservableApp;