import React, { useState } from 'react';

const Form = props => {

	//Card structure
	const [data, setData] = useState({
		name: "",
		email: "",
		role: "",
	});

	//Keeps track of changes
	const eventHandler = event => {
		console.log(event);
		setData({...data, [event.target.name]: event.target.value});
	};

	//Submits data and creates new card
	const submitForm = event => {
		event.preventDefault();
		//addMember is defined in app.js
		props.addMember(data);
	};

	return(
		<div>
			         <form onSubmit={submitForm}>
             <label htmlFor="nameInput">Name:</label>
             <input 
                onChange={eventHandler}
                type="text"
                maxLength="60"       
                placeholder="Name"
                id="nameInput"
                name="name"/>
               <br/>

               <label htmlFor="emailInput">Email-id:</label>
               <input 
                onChange={eventHandler}
                type="email"
                maxLength="60"       
                placeholder="Email-id"
                id="emailInput"
                name="email"/>
                <br/>

              <label htmlFor="roleInput">Role:</label>
               <select
                 onChange={eventHandler}
                id="roleInput"
                name="role">
                <option value='1'>FullStack Developer</option>
                <option value='2'>FrontEnd Developer</option>
                <option value='3'>BackEnd Engineer</option>
                <option value='4'>Technical QA</option>
                <option value='5'>Project Manager</option>
                <option value='6'>Technical BA</option>
               </select> 
                <br/>

               <button type="submit">Submit</button>
            </form>
		</div>
	);
}

export default Form;