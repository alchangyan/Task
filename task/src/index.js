import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var mainPartArray = {
	0:{
		id: 'firstName', 
		name: 'Name',
		errorClassName: 'errorFirstName'
	},
	1:{
		id: 'lastName',
		name: 'Last name', 
		errorClassName: 'errorLastName'
	},
	2:{
		id: 'email', 
		name: 'Email',
		errorClassName: 'errorEmail'
	},

};
class Part extends React.Component {

	render() {
	  return (
	  	<div className="group{this.props.value}">
		    <label htmlFor="">{this.props.value['name']}</label>
		    <input type="text" id="{this.props.value['id']}" onKeyDown={this.props.onKeyDown}/>
		    <span className="error errorInput errorFirstName">Name is required</span>
	  	</div>
	  );
	}
}

class MainPart extends React.Component {
	constructor() {
		super();
		this.state = {
			value:''
		}
	}
	onKeyDown(i){
		console.log(i)
	}
	renderComponents(i){
	    return (
	      <Part
	        value={mainPartArray[i]}
	        htmlFor={mainPartArray[i]['id']}
	        onKeyDown={() => this.onKeyDown(i)}
	      />
	    );
	  }
	render() {
		return(
			<div>
				{this.renderComponents(0)}
				{this.renderComponents(1)}
				{this.renderComponents(2)}
			</div>
			)
	}
}

class App extends React.Component {
  construcor() {
    // super();
    };

// string.charAt(0).toUpperCase() + string.slice(1);

  render() {
    return (
      <div className="form">
        <h1>Register account</h1>
        <MainPart />
        {/*<label htmlFor="firstName">Name</label>
        <input type="text" id="firstName"/>
        <span className="error errorInput errorFirstName">Name is required</span>

        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName"/>
        <span className="error errorInput errorLastName">Name is required</span>

        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>
        <span className="error errorInput errorEmail">Name is required</span>*/}


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
