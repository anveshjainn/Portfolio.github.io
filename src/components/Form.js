import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./FormStyles.css";



const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_69ujzkq", "template_cez521j", form.current, {
        publicKey: "VsZIXclD3LojclfG2",
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="Your_Name"></input>

            <label>Email</label>
            <input type="email" name="Email"></input>

            <label>Subject</label>
            <input type="text"></input>

            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="Message"/>

            <button className="btn">Submit</button>
        </form>
    </div>
  );
};

export default Form;