import React from 'react';
import logo from '../icons/logo.svg';

class NavigationBar extends React.Component {
  render(){
    return(
      <div className="nav-wrapper">
        <style jsx>{`
            .nav-wrapper {
                background-color: #363C3C;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: justify;
                    justify-content: space-between;
                -ms-flex-align: center;
                    align-items: center;
                padding: 10px 20px;
            }

            .search {
                border-radius: 6px;
                width: 320px;
                padding-left: 21px;
                height: 34px;
                border: none;
                outline: none;
                font-size: 14px;
                margin: 0 0 0 20px;
            }

            .icon {
                height: 40px;
                margin-right: 10px;
            }
        `}</style>
            <img src={logo} className="icon" onClick={this.handleListView} alt="" />
                <input
                className="search"
                placeholder="Search"
                value={this.state.searchText}
                onChange={this.handleChange} />
        </div>
        );
    }
}

export default NavigationBar;
