import React from 'react'
import './menu.css' 
import Content from './Content'
import { Component } from 'react'
class Sidebar extends Component{
    render()
    {
      
  return (
    <div className="con">
            <div className="menu1">
      <div className="dropdown">
        <button className="dropbtn buttonpadding"  > Personal Info
        </button>
        
      </div>
      {/* <NavLink to="/Personal">About</NavLink> */}
      <div className="dropdown">
        <button className="dropbtn buttonpadding">workDone
      
        </button>
       
      </div>
      <div className="dropdown">
        <button className="dropbtn buttonpadding">Settings
     
        </button>
      
      </div>
     
    </div>
           <Content/>
    </div>

  );

    }
};
export default Sidebar