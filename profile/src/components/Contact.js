import React, { useState }  from 'react'
import { checkPassword, validateEmail } from '../../src/utils/helpers';
import '../assets/css/Contact.css'

const Contact = () => {
      // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setname(inputValue);
    } else {
      setPassword(inputValue);
    }
  };
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          return;
        }
        if (!checkPassword(password)) {
          setErrorMessage(
            `Choose a more secure password for the account: ${name}`
          );
          return;
        }
        alert(`Hello ${name}`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setname('');
        setPassword('');
        setEmail('');
      };
  return (
    
    <div className="Contact container my-3">

        <div className="row">

            <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                <span className="fw-bold"><i className="bi bi-person-lines-fill"></i> Address</span> 105 Maycroft Ct. Tyrone GA 30290
                </li>
                <li className="list-group-item">
                <span className="fw-bold"><i className="bi bi-telephone-fill"></i> Phone:</span> (770) 402-6330
                </li>
                <li className="list-group-item">
                <span className="fw-bold"><i className="bi bi-envelope-fill"></i> Email:</span>
                tuinfor@ymail.com
                </li>
            </ul>
            </div>

            <div className="col-md">
                <div className="">
                    <form className="my-form">
                        <div className="form-group">
                            <label>Name: </label>
                            <input 
                            className="form-control border-success" 
                            value={name}
                            onChange={handleInputChange}
                            type="text" 
                            name="name" 
                            placeholder="Your Name"
                            required="required" />
                        </div>
                        <div className="form-group">   
                            <label>Email: </label>
                            <input className="form-control border-warning" t
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="email"/>
                        </div>   
                        <div className="form-group">   
                            <label>Message: </label>
                            <input className="form-control border-primary" 
                             onChange={handleInputChange}
                            type="text" 
                            name="message" 
                            placeholder="Your message" />
                        </div>    
                        <button className="btn btn-primary btn-lg my-1" 
                        onClick={handleFormSubmit}
                        type="click"> 
                        Submit
                        </button>
                    </form>
                    {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                    )}
        </div>
    </div>

        </div>
</div>
  )
}


export default Contact