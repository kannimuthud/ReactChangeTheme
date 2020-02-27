import React from 'react'
<<<<<<< HEAD
import './menu.css' 
import Content from './Content'
import { Component } from 'react'
class Sidebar extends Component{
    render()
    {
      
=======
import './menu.css'
import Content from './Content'
export default function  Sidebar() {
>>>>>>> ad17399a6715572ad0e96aa95c7d731daa6714a0
  return (
    <div className="con">
            <div className="menu1">
      <div className="dropdown">
<<<<<<< HEAD
        <button className="dropbtn buttonpadding"  > Personal Info
        </button>
        
      </div>
      {/* <NavLink to="/Personal">About</NavLink> */}
=======
        <button className="dropbtn buttonpadding"> Personal Info
        </button>
        
      </div>
>>>>>>> ad17399a6715572ad0e96aa95c7d731daa6714a0
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
<<<<<<< HEAD

    }
};
export default Sidebar
=======
};
>>>>>>> ad17399a6715572ad0e96aa95c7d731daa6714a0
