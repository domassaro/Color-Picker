import React from 'react';

class DetailView extends React.Component {
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
            background-color: 'white';
            height: 200px;
            width: 200px;
            margin: 30px;
            display: inline-block;
          }
        `}</style>
        <div>{"HEY" + this.props.color} </div>
        <div className="detailContainer">
            <div className="primaryColorItem">
            {this.props.color}
            </div>
            <div className="shades">
            {this.props.color}            
            </div>

        <button onClick={this.props.clear}>Clear</button>
      </div>
      </div>
    );
  }
}

export default DetailView;