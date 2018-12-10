import React from 'react';
import logo from '../icons/logo.svg';

class NavigationBar extends React.Component {
  render(){
    return(
      <div className="nav-wrapper">
        <style jsx>{`
            .nav-wrapper {
                background-color: #363C3C;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 20px;
            }

            .search {
                height: 34px;
                border: none;
                font-size: 14px;
                border-radius: 6px;
                width: 320px;
                padding-left: 21px;
                margin: 0 0 0 20px;
            }

            .icon {
                height: 40px;
                margin-right: 10px;
            }
        `}</style>
            <img src={logo} className="icon" alt="" />
                <input
                className="search"
                placeholder="Search" />
        </div>
        );
    }
}

export default NavigationBar;
