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
      if (currentColor !== "#ffffff") {
        let newColor = chromaJs(currentColor).brighten(.2).hex();
        shadesPresent.push(newColor);
        currentColor = newColor;
      } else {
        let newShade = chromaJs(currentColor).darken(.2).hex();
        shadesPresent.push(newShade);
        currentColor = shadesPresent;
      }
    }

    return (       
      <div>
        <style jsx>{`
          .color-container-shade {
            position: relative;
            -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            border-radius: 10px;
            overflow: hidden;
            background-color: 'white';
            height: 10vw;
            width: 10vw;
            margin: 10px;
            display: inline-block;
          }
          .selected-color-container {
            align-items: center;
            border-radius: 8px;
            box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);	
            overflow: hidden;
            display: flex;
            justify-content: center;
            height: 500px;
            margin: auto;
            width: 55vw;
            position: relative;
          }
          .container-pagination {
            display: none;
          }
          .color-label-shade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: left;
            color: #505050;
            padding: 10px 20px;
            background-color: white;
          }
          .color-label-selected {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: left;
            font-size: 20px;
            padding: 25px 20px;
            background-color: #fff;
            color: #505050;
          }
          .clear-button {
            padding: 10px;
            border: .5px solid #505050;
            text-align: center;
            border-radius: 5px;
            background: white;
            color: #505050;
            font-size: 17px;
            width: 10%;
            font-weight: bold;
            height: 25x;
            border-radius: 8px;
            letter-spacing: 1.2px;
            display: block;
            margin-left: auto;
            transition: 0.3s;
            margin-right: auto;
          }
          .clear-button:hover {
            cursor: pointer;
            background-color: ${this.props.color};
            border: .5px solid white;
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
          }
          return (<div key={d} className="color-container-shade" style={styles}>
            <div className="color-label-shade">{d}</div>
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