import React from "react"
import image from "../home-main.svg";
import bg from "../bg.jpg"
import './Intro.css'

const Intro=()=>{
	return(
		<div>
		
			<div className="typewriter">
                  <h1>Hello, 
                  My name is Aryan Thakor</h1>
               </div>

             <div className="container">
               <div className="row">
                <div className="col-md-12 text-center">
                 <h3 className="animate-charcter"> I am a <br/> web developer</h3>
                
               </div>
               </div>
            </div>
            <img alt="" className='photo' src={image} />
            {/*<img alt="" className='bg' src={bg} />*/}
		</div>


		);
		

	
}
export default Intro;