import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  // construcor() {
  //   // super();
  //   this.state = {
      
  //   };
  // };

  render() {
    return (
      <div className="form">
        <h1>Register account</h1>
        <label htmlFor="firstName">Name</label>
        <input type="text" id="firstName"/>
        <span className="error errorInput errorFirstName">Name is required</span>
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName"/>
        <span className="error errorInput errorLastName">Name is required</span>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>
        <span className="error errorInput errorEmail">Name is required</span>
        <h2>Bank accounts</h2>
        <div className="bankAccounts">
          <span className="error errorBanks">You should provide at least bank account</span>
          <div className="btn btnBank">+ Add bank account</div>
        </div>
        <div className="btn btnSubmit">Submit!</div>
      </div>
    );
  }
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
	);
