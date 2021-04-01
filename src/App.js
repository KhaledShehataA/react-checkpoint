import React from 'react';
import './App.css';

function App() {
  return (
   
    <section className="get_in_touch">
      <h1 className="title">get in touch</h1>

      <div className="container">
        <div className="contact-form row">

          <div className="form-field col-lg-6">
            <input id="name" className="input-text" type="text"/>
            <label htmlFor="name" className="label">name</label>
          </div>

          <div className="form-field col-lg-6">
            <input id="email" className="input-text" type="email"/>
            <label htmlFor="email" className="label">email</label>
          </div>

          <div className="form-field col-lg-6">
            <input id="phone" className="input-text" type="text"/>
            <label htmlFor="phone" className="label">contact number</label>
          </div>

          <div className="form-field col-lg-6">
            <input id="message" className="input-text" type="text"/>
            <label htmlFor="message" className="label">message</label>
          </div>

          <div className="form-field col-lg-6">
            <input className="submit-btn" type="submit" value="submit" name="" id=""/>
          </div>

        </div>
      </div>

    </section>

  );
}

export default App;
