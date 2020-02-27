import React, { useContext } from 'react'
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
      className="dropbtn button1"
      onClick={() => toggle()}
    >
      ChangeTheme
    </button>
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
      
      </div>

    </div>

  );
};