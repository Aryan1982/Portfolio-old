import React from "react";
import{Link} from 'react-router-dom'
import Intro from './Intro'
import "./Home.css"

  
const Home = () => {
  return (
    <div>
      <Intro/>
      <a href="https://www.instagram.com/aryan_thakor2411/">
            <i  className="instagram">
              <i className="circle"></i>
               <i className="smallcircle"></i>
             </i>
             </a>

      <a href="https://www.linkedin.com/in/aryan-thakore-285617242/">
             <i className="linkdin">
             <i className="in">in</i>
             </i>
             </a>
    
    </div>
    
  );
}
  
export default Home;