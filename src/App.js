// import logo from './logo.svg';
import './App.css';
import image from "./img6.jpg";
import hamicon from "./hamburgericon.png"
import React,{useState} from "react";

function App() {
  const[show,setShow]=useState(false)
  return (
    <div>

          <span onClick={()=>setShow(!show)}>
          <img className="menu-icon" alt="" src={hamicon}/>
          </span>
              <div className="mobilenav">
              <nav >
              {
                show?<ul>
                   <li><a href="asdf" className='button'>Home</a></li>
                   <li><a href="asdf" className='button'>About</a></li>
                   <li><a href="asdf" className='button'>Projects</a></li>
                   <li><a href="asdf" className='button'>Contact</a></li>
                </ul>:null
              }
             </nav>
             </div>

            <nav className="navbar">
                <ul>
                   <li><a href="asdf" className='button'>Home</a></li>
                   <li><a href="asdf" className='button'>About</a></li>
                   <li><a href="asdf" className='button'>Projects</a></li>
                   <li><a href="asdf" className='button'>Other</a></li>
                
                </ul>
              </nav>
              <div className="typewriter">
                  <h1>Hello, 
                  My name is Aryan Thakore</h1>
              </div>

            
         
          <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                <h3 className="animate-charcter"> I am a <br/> web developer</h3>
                
                </div>
              </div>
            </div>
            <img alt="" className='photo' src={image} />


            <div className="intro">
            <h1>LET ME <span className="lightblue">INTRODUCE</span> MYSELF</h1>
            <p>I fell in love with programming and I have at least learnt<br/> something, I think… 🤷‍♂️<br/><br/>

              I am fluent in classics like <span className="cyan"> Javascript and Python.</span><br/><br/>

              My field of Interest's are building new <span className="cyan">Web Technologies<br/> and Products </span>

              and also in areas related to <span className="cyan">Deep Learning<br/>and Natural Launguage Processing.</span><br/><br/>

              Whenever possible, I also apply my passion for<br/>developing products with <span className="cyan">Node.js</span> and <span className="cyan">Modern Javascript<br/>Library and Frameworks</span>  like <span className="cyan">React.js and Next.js</span>
            </p>
            </div>

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

            <i className="footer">- website is under production,therefore i have not linked the navbar yet, so please dont judge me on this</i>
      
      
    </div>

  );
}
export default App;
