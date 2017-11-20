import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="form">
        <h1>Register account</h1>
        <label htmlFor="firstName">Name</label>
        <input type="text" id="firstName"/>
        <span className="error errorFirstName"></span>
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName"/>
        <span className="error errorLastName"></span>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>
        <span className="error errorEmail"></span>
        <h2>Bank accounts</h2>
        <span className="error errorBanks">You should provide at least bank account</span>
        <div className="btn btnBank">+ Add bank account</div>
        <div className="btn btnSubmit">Submit!</div>
      </div>
    );
  }
}

export default App;
