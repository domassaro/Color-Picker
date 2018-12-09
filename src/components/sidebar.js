import React from 'react';
import chromaJs from "chroma-js";
import Colors from "./common/colors";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleColorFilter(name) {
        const colorOptions = { 
            Red: 'Red',
            Orange: 'Orange',
            Yellow: 'Yellow', 
            Green: 'Green',
            Blue: 'Blue',
            Purple: 'Purple', 
            Brown: 'Brown', 
            Gray: 'Gray'
        };

        // let selectedColor = [];
        // for (let i = 0; i < Colors.length; i++) {
        //   if (Colors[i] !== undefined) {
        //     selectedColor.push(chromaJs(colorOptions[i]).name());
        //     console.log(selectedColor);
        //   }
        // }

        return (e) => {
            e.preventDefault();
            let selectedColor = [];
            colorOptions.forEach((color) => {
                if (Colors[name] !== undefined) {
                    selectedColor.push(chromaJs(color));
                    console.log(selectedColor);
                    console.log("meep");
                }
            });
        };
    }

  render() {
    const colorOptions = { 
        Red: 'Red',
        Orange: 'Orange',
        Yellow: 'Yellow', 
        Green: 'Green',
        Blue: 'Blue',
        Purple: 'Purple', 
        Brown: 'Brown', 
        Gray: 'Gray'
    };

    return (        
      <div className="wrapper">
        <style jsx>{`
            .wrapper {
                height: 100%;
                background-color: #D6D8D8;
                padding: 60px 25px 30px;
                -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
                box-shadow: -1px -2px 10px 0px rgb(100, 100, 100);
            }

            .random-color-button {
                padding: 10px;
                border: 1px solid #363C3C;
                outline: none;
                border-radius: 5px;
                background: white;
                font-size: 17px;
                margin-bottom: 30px;
                width: 100%;
                height: 50px;
                border-radius: 8px;
            }

            .random-color-button:hover {
                background-color: #363C3C;
                color: rgb(220, 220, 220);
                cursor: pointer;
            }

            .wrapper > a {
                text-align: left;
                margin: 10px 0 9px;
                font-size: 28px;
                line-height: 34px;
                color: rgb(60, 60, 60);
                text-transform: capitalize;
            }
            
            .color-options {
                padding: 10px;
                position: relative;
                color: #000;
                text-decoration: none;
            }
            .color-options:hover {
                color: #000;
                cursor: pointer;
            }
            .color-options:before {
                content: "";
                position: absolute;
                width: 60px;
                height: 2px;
                bottom: 0;
                left: 10px;
                background-color: #000;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
            }
            .color-options:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }

            @media screen and (max-width: 800px) {
                .wrapper {
                    padding: 20px;
                }

                .random-color-button {
                    margin: 0 auto 10px;
                    display: block;
                }

                .wrapper > a {
                    display: inline-block;
                    margin: 0 10px;
                }
            }
        `}</style>
            <button className="random-color-button" onClick={this.handleRandomClick}>
                Random Color
            </button>
            <div>
                {Object.keys(colorOptions).map( (color, index) => (
                    <div className="color-options"
                        key={index}
                        onClick={this.handleColorFilter(color)}>
                        {color}
                    </div>
                ))}
            </div>
      </div>
    );
  }
}

export default Sidebar;