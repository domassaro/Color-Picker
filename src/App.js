import React, { Component } from 'react';
import ColorList from "./components/colorList";
import DetailView from "./components/detailView";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sidebar";
import Pagination from "./components/pagination";
import ColorStore from "./components/stores/colors";
import * as mobxReact from 'mobx-react';
import chromaJs from "chroma-js";
import { Provider } from 'mobx-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.colorStore = new ColorStore();

    this.state = {
      totalCount: this.colorStore.colors.length,
      page: 1,
    };
  }

  handleRandomClick = () => {
      let randomColor = chromaJs.random().name();
      this.colorStore.selectColor(randomColor);
  }

  getColor = (color) => {
    this.setState({
      totalCount: this.colorStore.likeColors[color].length,
      colorCount: this.colorStore.likeColors[color].length,
      colorsPresent: this.colorStore.likeColors[color],
    })
  }

  colorDetailSelected = (colorSelected) => {
    this.colorStore.selectColor(colorSelected);
  }

  paginate = pageNumber => {
    this.setState({
      page: pageNumber,
    });
  };

  clearColor = () => {
    this.colorStore.selectColor(null);
  }; 

  allColors = () => {
    this.setState({
      totalCount: this.colorStore.colors.length,
      colorCount: null,
      colorsPresent: null,
      page: 1
   });
  }

  render() {

    return (
      <Provider ColorStore ={this.colorStore}>
        <div>
          <style jsx>{`
            .container {
              height: 100%;
              display: -webkit-box;
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
            <Sidebar handleRandomClick={(e) => this.handleRandomClick(e)}
              getColor={(color) => this.getColor(color)}
              getAll={this.allColors}
             />
            <div className="color-content">
              {!this.colorStore.getCurrentColor() && 
              <ColorList colorsPresent={this.state.colorsPresent}
                page={this.state.page}
                onClick={(e) => this.colorDetailSelected(e)} />}
              {this.colorStore.getCurrentColor() && 
              <DetailView clear={this.clearColor} 
                color={this.colorStore.getCurrentColor()}/>}
              <Pagination 
                pageCount={Math.floor(this.state.totalCount / 12) - 1}
                currentPage={this.state.page} 
                paginate={this.paginate} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

var ObservableApp = mobxReact.observer(App);
export default ObservableApp;