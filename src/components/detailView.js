import React from 'react';
import chromaJs from "chroma-js";

class DetailView extends React.Component {
  render() {

    let styles = {
      backgroundColor: this.props.color,
    };

    let currentColor = this.props.color;
    let shadesPresent = [];

    for (let i = 0; i <= 4; i++) {
      let brighten = chromaJs(currentColor).brighten(.3).hex();
      shadesPresent.push(brighten);
    }
    
    let brighten = chromaJs(currentColor).brighten(.3).hex();

    let styleShades = {
      backgroundColor: brighten
    }


    return (        
      <div>
        <style jsx>{`
          .color-container-shade {
            position: relative;
            -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            border-radius: 8px;
            overflow: hidden;
            background-color: 'white';
            height: 10vw;
            width: 10vw;
            margin: 10px;
            display: inline-block;
          }
          .selected-color-container {
            position: relative;
            -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            border-radius: 8px;
            overflow: hidden;
            background-color: 'white';
            height: 25vw;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 60vw;
          }
          .container-pagination {
            display: none;
          }

          .color-container-shade .color-label-shade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: left;
            padding: 10px 20px;
            background-color: #fff;
            color: rgb(80,80,80);
          }

          .selected-color-container .color-label-selected {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: left;
            padding: 10px 20px;
            background-color: #fff;
            color: rgb(80,80,80);
          }
          .clear-button {
            padding: 10px;
            border: 1px solid #363C3C;
            outline: none;
            text-align: center;
            border-radius: 5px;
            background: white;
            font-size: 17px;
            width: 10%;
            height: 25x;
            border-radius: 8px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .clear-button:hover {
            background-color: #363C3C;
            color: rgb(220, 220, 220);
            cursor: pointer;
          }
          .shades {
            padding-top: 20px;
            padding-bottom: 20px;
            text-align: center;
          }
        `}</style>
        
        <div className="selected-color-container" style={styles}>
          <div className="color-label-selected">{this.props.color}</div>
        </div>

        <div className="shades">
        {shadesPresent.map((d) => {
          let styles = {
            backgroundColor: d,
          };
          return (<div className="color-container-shade" style={styles}>
            <div className="color-label-shade">{brighten}</div>
          </div>);
        })}
        </div>

        <div className="clear-button" onClick={this.props.clear}>
          Clear
        </div>
      </div>
    );
  }
}

export default DetailView;