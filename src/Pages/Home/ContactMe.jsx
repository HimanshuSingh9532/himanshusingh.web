import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


export default function ContactMe () {

  const formRef =useRef();
  const [ error,setError] = useState(false);
  const [ success,setSuccess] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytnf5ce', 'template_7yeuq0a', formRef.current, 's6VAOyBmIQehs6MCH')
      .then((result) => {
          setSuccess(true)
      }, (error) => {
          setError(true);
      });
  };


    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title"><h2>Get In Touch</h2> <br>
          </br></p>
        
          <p className="text-lg">
            I am always open to brainstroming new ideas that<br/> I can help make a reality.
            If you have any questions, please do not hesitate to contact me.
          </p>
        </div>
        <form  ref={formRef}   onSubmit={sendEmail} className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">Full Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="name"
                id="first-name"
                required
                placeholder='Name'
              />
            </label>
            
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
                placeholder='Email'
              />
            </label>
           
          </div>
         
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Say Hello! Or leave any comments:)"
              name="message"
            />
          </label>
          
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>

          {error && "Error"}
          { success && "Success"}
        </form>
      </section>
    );
  };
