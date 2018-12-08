import React from 'react';

class ColorList extends React.Component {
  render() {

    return (        
      <div>
        <style jsx>{`
          .color-container {
            position: relative;
            -webkit-box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
                    box-shadow: 0 0 4px 0 rgba(0,0,0,0.5);
            border-radius: 8px;
            overflow: hidden;
            background-color: blue;
            height: 200px;
            width: 200px;
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
          <div className="color-container">
            <div className="color-label">#cfff4s</div>
          </div>
      </div>
    );
  }
}

export default ColorList;