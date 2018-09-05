import React, {Component} from 'react';

class SignIn extends Component{
	state ={
		name: null,
		email:null,
		age: 0,
		gender: null,
		loc: null,
		message:null

	}

	handleChange = (e) =>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		console.log("Welcome")
	}


	render(){
		return(
			<div>
				<form onSubmit = {this.handleSubmit}>
					<label htmlFor="name">Name: </label>
					<input type = "text" id = "name" onChange={this.handleChange} /> <br/> <br/>

					<label htmlFor="email">Email: </label>
					<input type = "text"  id = "email" onChange={this.handleChange} /> <br/> <br/>

					<button> Sign Up </button> 

				</form>

			 </div>

		)
	}

}



export default SignIn