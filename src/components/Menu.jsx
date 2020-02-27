import React, { useContext } from 'react'
<<<<<<< HEAD
import './Style/menu.css'
import ThemeContext from './context/ThemeContext';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Contact from './Dashboard/Contact';
import Services from './Dashboard/Services'
import Content from './Dashboard/Image'
export default function  Menu() {
  const {toggle } = useContext(ThemeContext);

  // let history = useHistory();

 

  return (
    <div>
      <Router>
                <div className="link1">
                    
                   
                    
                     <ul className="ul1">
                     <div className="headerposition">
                        <li> <NavLink to="/product">Product
                        </NavLink></li>
                        
                        <li> <NavLink to="/services">Services
                        </NavLink></li>
                        <li> <NavLink to="/images">Images
                        </NavLink></li>
                        <li> <NavLink to="/contact">Contact
                        </NavLink></li>

                        <button 
=======
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
>>>>>>> ad17399a6715572ad0e96aa95c7d731daa6714a0
      className="dropbtn button1"
      onClick={() => toggle()}
    >
      ChangeTheme
    </button>
<<<<<<< HEAD
                        </div>
                    
                   </ul>
                     
                     </div>
                     {/* render={props=> le {<Examp...props}/>} */}
                    <Route path="/product1" exact component={Services} />
                     <Route path="/services1" component={Services}/>
                    <Route path="/images1" component={Content}/>
                    <Route path="/contact1" component={Contact}/>
                    

            </Router>
            
      <div>
      
=======
>>>>>>> ad17399a6715572ad0e96aa95c7d731daa6714a0
      </div>

    </div>

  );
};