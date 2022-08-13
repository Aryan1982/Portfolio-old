import React from "react";
import{Link} from 'react-router-dom'
import "./About.css"
import avatar from "../avatar.svg"

  
const About = () => {
  return (
    <div>
          <div className="intro">
             <h1>LET ME <span className="lightblue">INTRODUCE</span> MYSELF</h1>
             <p>I fell in love with programming and I have at least<br/>learnt something, I think… 🤷‍♂️<br/><br/>

               I am fluent in classics like <span className="cyan"> Javascript and Python.</span><br/><br/>

               My field of Interest's are building new <span className="cyan">Web Technologies<br/> and Products </span>

              and also in areas related to <span className="cyan">Deep Learning<br/>and Natural Launguage Processing.</span><br/><br/>

               Whenever possible, I also apply my passion for<br/>developing products with <span className="cyan">Node.js</span> and <span className="cyan">Modern Javascript<br/>Library and Frameworks</span>  like <span className="cyan">React.js and Next.js</span>
             </p>
          </div>
          <img alt="" className='avatar' src={avatar} />
          <div className="skills">
          <h1>MY SKILLS</h1>
          </div>
          <div className="skillcontainer">
          <div className="skillitem">HTML:<div className="skill hundred"></div></div>
          <div className="skillitem">CSS:<div className="skill hundred"></div></div>
          <div className="skillitem">Javascript:<div className="skill fifty"></div></div>
          <div className="skillitem padding">Python:<div className="skill seventy5"></div></div>
          </div>
    </div>
    
  );
}
  
export default About;