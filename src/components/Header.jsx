import React, { Component } from 'react';
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <h3>Search for the emoployee using the search bar</h3>
                <h4>Sort the table by Employee Name by clicking on the red tag</h4>
            </div>
        )
    }
}
export default Header;

