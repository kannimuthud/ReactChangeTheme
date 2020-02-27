import React, { Component } from 'react'
import '../Style/menu.css'
class Content extends Component{
    render(){
        return(
           <div className="maincontent">
                <div className="imageposition"> 
                <div>
                <img className="img" src="https://www.dotworld.in/static/media/katomaran.00b9490b.svg" alt=""/>

            </div>
            <div>
                <img className="img" src="https://www.dotworld.in/static/media/infinitydots.d7e6db83.svg" alt=""/>

            </div>
           </div>
                </div>
        );
    }
}
export default Content