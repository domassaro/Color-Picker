import React from 'react';
import Colors from "./common/colors";
import chromaJs from "chroma-js";

class ColorList extends React.Component {


  render() {
    let colorsPresent = [];
    for (let i = 0; i < Colors.length; i++) {
      if (Colors[i] !== undefined) {
        colorsPresent.push(chromaJs(Colors[i]).hex());
      }
    }




    return (        
      <div>
        <style jsx>{`
          .color-container {
            position: relative;
            -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            border-radius: 8px;
            overflow: hidden;
            background-color: 'white';
            height: 200px;
            width: 200px;
            margin: 30px;
            display: inline-block;
          }
          .color-container:hover {
            -webkit-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
            transition: 0.7s;
          }

          .color-container .color-label {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: left;
            padding: 10px 20px;
            background-color: #fff;
            color: rgb(80,80,80);
          }
        `}</style>
        {colorsPresent.map((d, i) => {
            let styles = {
              backgroundColor: d,
            };
          return (<div className="color-container" style={styles}>
          <div className="color-label">{d}</div>
        </div>);
          })}
      </div>
    );
  }
}

export default ColorList;