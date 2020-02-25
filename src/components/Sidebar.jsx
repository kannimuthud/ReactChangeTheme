import React from 'react'
import './menu.css'
import Content from './Content'
export default function  Sidebar() {
  return (
    <div className="con">
            <div className="menu1">
      <div className="dropdown">
        <button className="dropbtn buttonpadding"> Personal Info
        </button>
        
      </div>
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
};