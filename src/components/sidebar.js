import React from 'react';
import chromaJs from "chroma-js";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    getRedColor = () => {
        chromaJs.scale(['red']).colors(12);
    }

  render() {
    return (        
      <div className="wrapper">
        <style jsx>{`
            .wrapper {
                background-color: #D6D8D8;
                padding: 60px 25px 30px;
                box-shadow: -1px -2px 10px 0px rgb(100, 100, 100);
            }

            .random-color-button {
                padding: 10px 25px;
                font-weight: bold;
                border: 1px solid #363C3C;
                background: white;
                font-size: 17px;
                font-family: 'Source Serif Pro', serif;
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
            <button className="random-color-button" onClick={(e) => this.props.handleRandomClick(e)} >
                Random Color
            </button>
            <div>
                <div className="color-options" onClick={(e) => this.getRedColor()}>Red</div>
                <div className="color-options">Orange</div>
                <div className="color-options">Yellow</div>
                <div className="color-options">Green</div>
                <div className="color-options">Blue</div>
                <div className="color-options">Purple</div>
                <div className="color-options">Brown</div>
                <div className="color-options">Gray</div>
            </div>
      </div>
    );
  }
}

export default Sidebar;