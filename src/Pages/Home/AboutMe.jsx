import userEvent from "@testing-library/user-event";
import { useRef } from "react";

export default function AboutMe() {


    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/Himanshuimage.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            
            <h1 className="skills-section--heading">About Me</h1><br/>
            <p className="hero--section-description">
            As a full stack web developer, my passion for coding and development is
             what drives me forward.I have experience working with a range of programming 
             languages including HTML, CSS, JavaScript, and various backend technologies
              such as Node.js and MySQL.
             My skills
              are not limited to just programming languages, I also have experience 
            with various
              frameworks such as React, Express.js and Angular.js.<br/>

             <b>Top Skills -:</b> <br/>
             React.js • JavaScript • Tailwind CSS • Node.js • Redux.js 
            </p>
          </div>
        </div>
      </section>
    );
  }