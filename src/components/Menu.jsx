import React, { useContext } from 'react'
import './menu.css'
import ThemeContext from '../context/ThemeContext';
export default function  Menu() {
  const {toggle } = useContext(ThemeContext);


  return (
    <div className="menu">
      <div className="dropdown">
        <button className="dropbtn">Home
      <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          {/* <a href="#">Link 1</a> */}
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Services
      <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Service 1</a>
          <a href="#">Service 2</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Product
      <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Product 1</a>
          <a href="#">Product 2</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Contact
      <i className="fa fa-caret-down"></i>
        </button>
        
      </div>
      <div>
      <button 
      className="dropbtn button1"
      onClick={() => toggle()}
    >
      ChangeTheme
    </button>
      </div>

    </div>

  );
};