import React, { Component } from 'react';
import './Style/menu.css';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Contact from './Dashboard/Contact';
import Services from './Dashboard/Services'
import Product from './Dashboard/Product'
import Content from './Dashboard/Image'
class App1 extends Component{
  
    render(){
        return(
            <Router>
                <div className="link">
                    
                     <div className="innerlink">
                     <ul>
                        <li> <NavLink to="/product" activeClassName='is-active' >Product
                        </NavLink></li>
                        
                        <li> <NavLink to="/services" activeClassName='is-active'>Services
                        </NavLink></li>
                        <li> <NavLink to="/images" activeClassName='is-active' >Images
                        </NavLink></li>
                        <li> <NavLink to="/contact" activeClassName='is-active' >Contact
                        </NavLink></li>
                   </ul>
                     </div>
                     <div className="contentposition">
                        
                    <Route path="/product" exact  component={Product}/>
                     <Route path="/services" component={Services}/>
                    <Route path="/images" component={Content}/>
                    <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App1