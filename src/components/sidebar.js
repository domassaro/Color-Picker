import React from 'react';

class Sidebar extends React.Component {
  render() {

    return (        
      <div className="wrapper">
        <style jsx>{`
            .wrapper {
                width: 270px;
                background-color: #D6D8D8;
                padding: 60px 25px 30px;
                box-shadow: -1px -2px 10px 0px rgb(100,100,100);
            }

            .random-color-button {
                padding: 10px;
                border: 1px solid #363C3C;
                color: #363C3C;
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
      </div>
    );
  }
}

export default Sidebar;