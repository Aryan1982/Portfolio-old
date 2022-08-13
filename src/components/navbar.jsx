import React,{useState} from 'react';
import{HashRouter as Router, Routes,Route, Link} from 'react-router-dom'
import About from "./About"
import Home from "./Home"
import "./Navbar.css"


const Navbar=()=>{
	const[show,setShow]=useState(false)
	return(
		<div>
		
			<div className='hamburgericon' onClick={()=>setShow(!show)}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
	
		<Router>
			<div className="desknav">
			
				<ul>

		                   <li><Link to="/" className="links">Home</Link></li>
		                   <li><Link to="/about" className="links">About</Link></li>
		                   {/*<li><Link to="/about" className="links">Services</Link></li>
		                   <li><Link to="/about" className="links">Contact</Link></li>
*/}		        </ul>
	        </div>
				

		
	        <div className="mobnav">
	        {
		        show?<ul>

		                   <li><Link to="/" className="links">Home</Link></li>
		                   <li><Link to="/about" className="links">About</Link></li>
		                   
		        </ul>:null
		    }
	        </div>
	        <Routes>
					<Route exact path="/about" exact element={<About/>} />
					<Route exact path="/" exact element={<Home/>} />
					
					</Routes>
	        </Router>
        </div>

        
		);
}
export default Navbar;