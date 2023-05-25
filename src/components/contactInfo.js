import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
      setNameError('');
    } else if (name === 'email') {
      setEmail(value);
      setEmailError('');
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameError('Name field is required.');
    }

    if (!validateEmail(email)) {
      setEmailError('Valid email required.');
    }

    if (name.trim() === '' || !validateEmail(email)) {
      setErrorMessage('Please fill in the required fields with valid input.');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setNameError('');
    setEmailError('');
    setErrorMessage('');
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Contact Form</h5>
          <form className="form">
            <div className="mb-3">
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
              {nameError && <p className="error-text">{nameError}</p>}
            </div>

            <div className="mb-3">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
              {emailError && <p className="error-text">{emailError}</p>}
            </div>

            <div className="mb-3">
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                className="form-control"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;