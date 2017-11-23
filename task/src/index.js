import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var errors = {};
var bankCount = 0;



class App extends React.Component {
  constructor () {
    super ();
    this.state = {
    	firstName:'',
    	lastName:'',
    	email:'',
    	bankAccounts: []
    }
		
  }
  validator ( type, val ) {
  		console.log('validated' + type)
			switch(type) {
			  case 'firstName':
			  case 'lastName':
			  	return /^([A-za-z]{0,})\b$/.test(val);

			  case 'email':
			  	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);

			  case 'iban':
			  	return /^[A-Z]{2}\d{2}( |)(?:\d{4}( |)){3}\d{4}(?:( |)\d\d?)?$/.test(val);

			  default:
			  	return true;
			}

		}


	handeChange ( element ) {
		let obj = {}
		let classString = element.className
		let valueString = element.value

		let lastLetter = classString[classString.length-1] // for checking banks
		if (!isNaN(lastLetter)) {
			classString = classString.slice(0, -1);

			if(this.state.bankAccounts === undefined) this.state.bankAccounts = {} // it's wrong but I don't know another vays yet
			if(this.state.bankAccounts[lastLetter] === undefined) this.state.bankAccounts[lastLetter] = {}
			this.state.bankAccounts[lastLetter][classString] = valueString

		} else {
			obj[classString] = valueString
			lastLetter = '';
		}



		let errorVal = classString+lastLetter+'Error'

		if(this.validator(classString , valueString) || valueString === '') { // no errors

			if ( errors[errorVal] ) { // remove error if it exist
				this.refs[errorVal].classList.toggle('activatedError')
				delete errors[errorVal]
			}


		} else { // has error

			if ( !errors[errorVal] ) { // set error
				this.refs[errorVal].classList.toggle('activatedError')
				errors[errorVal] = true
			}
		}

			this.setState(obj); // set value
	}
	letsSubmit (e) {
		e.preventDefault()
		if (this.state.bankAccounts.length === 0) {
			if ( !errors['bankCount'] ) { // set error
				this.refs.bankCountError.classList.toggle('activatedError')
				errors['bankCount'] = true
			}
		}
		let emptyErr = false
		for(let i in this.refs) {
			if (this.refs[i].value !== undefined) {
				if(this.refs[i].value === '') emptyErr = true
				
			}
		}
		console.log(errors)
		console.log(errors[0])
		if (emptyErr) {
			alert( 'You have some empty fields.' )
		} else if ( Object.keys(error).length === 0 && error.constructor === Object ){
			console.log('im in')
			let isValid = true;
			for ( let i in this.state)
				if(typeof this.state[i] === 'object') {

				} else {

				}
			if (isValid) {}
			// validator
		}
	}

	addBankFields (e) {
		if ( errors['bankCount'] ) { // remove error if it exist
				this.refs.bankCountError.classList.toggle('activatedError')
				delete errors['bankCount']
		}
		this.state.bankAccounts[this.state.bankAccounts.length] = {iban:'',bankName:''}
	  bankCount = bankCount + 1,
		this.setState({
	    bankAccounts:this.state.bankAccounts
		});
	}

	removeBankField (i) {

		this.state.bankAccounts.splice( i-1 , 1 )
	  bankCount = bankCount - 1,
		this.setState({
	    bankAccounts: this.state.bankAccounts
		});
	}

	createBankBlocks (props) {
		let fields = []
		for (var i in props	) {
			let valI = "iban"+i
			let valB = "bankName"+i
			fields[i] = (
				<div
					key={i}
					ref={"bank"+i}
					className="bankBlock"
				>
					<span className="closeBankBlock" onClick={(e) => this.removeBankField(i)}>Remove</span>
					<label htmlFor="lastName">IBAN</label>
					<input 
							type="text" 
							ref={valI}
							className={valI}
							value={props[i].iban}
							onChange={(e) => this.handeChange(this.refs[valI])}
					/>
					<span ref={valI+"Error"} className="error errorInput">Value should be a valid IBAN</span>

					<label htmlFor="lastName">Bank name</label>
					<input 
							type="text" 
							ref={valB}
							className={valB}
							value={props[i].bankName}
							onChange={(e) => this.handeChange(this.refs[valB])}
					/>
					<span ref={valB+"Error"} className="error errorInput">Value should be a valid Bank Name</span>
				</div>
			)
		}
		return fields;
	}

  render() {
    return (
      <form className="form" onSubmit={this.letsSubmit.bind(this)}>
        <h1>Register account</h1>
        <label htmlFor="firstName">Name</label>
        <input 
        	type="text"
	    		ref="firstName"
	    		className="firstName"
	    		id="firstName"
	    		onChange={(e) => this.handeChange(this.refs.firstName)} 
	    	/>
        <span ref="firstNameError" className="error errorInput errorFirstName">Name is required</span>

        <label htmlFor="lastName">Last name</label>
        <input 
        	type="text" 
        	ref="lastName" 
        	className="lastName"
        	id="lastName"
        	onChange={(e) => this.handeChange(this.refs.lastName)}
        />
        <span ref="lastNameError" className="error errorInput errorLastName">Last name is required</span>

        <label htmlFor="email">Email</label>
        <input 
        	type="text" 
        	ref="email"
        	className="email"
        	id="email"
        	onChange={(e) => this.handeChange(this.refs.email)} 
    	/>
        <span ref="emailError" className="error errorInput errorEmail">Value should be a valid email</span>

        <h2>Bank accounts</h2>
        <div className="bankAccounts">
        	{ this.createBankBlocks(this.state.bankAccounts) }
          <span ref="bankCountError" className="error errorBanks">You should provide at least bank account</span>
          <div 
          	className="btn btnBank"
          	onClick={(e) => this.addBankFields(e)}
          >+ Add bank account</div>
        </div>
        <button type="submit" className="btn btnSubmit">Submit!</button>
      </form>
    );
  }
}


ReactDOM.render(
	<App />,
	document.getElementById('root')
	);

