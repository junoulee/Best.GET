import React, { useState } from 'react';
import LogInPage from './login-page';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Please enter all required fields.');
      return;
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => {
        if (response.ok) {
          alert('Account created successfully!');
          setSuccess(true);
        } else {
          throw new Error('Failed to create account.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to create account.');
      });
  }

  function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-=?[\]{};:<>,.?])[0-9a-zA-Z!@#$%^&*()_+|~\-=?[\]{};:<>,.?]{8,}$/;
    return passwordRegex.test(password);
  }

  function validateConfirmPassword(password, confirmPassword) {
    if (confirmPassword === '') {
      return;
    }
    return password === confirmPassword;
  }

  return (

    success
      ? (
        <LogInPage />
        )
      : (
        <>
          <header className="header-upper py-1 bg-white">
            <div className="container-xxl ">
              <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center">
                <img src="/images/logo.png" className="card-img-top" alt="..." style={{ width: '10%', height: '10%' }} />
              </Link>
            </div>
          </header>
          <div className="container-xxl d-flex justify-content-center">
            <div className="row">
              <div className="col-12 text-center">
                <div className="card mt-4" style={{ width: '22rem', borderColor: 'darkgray' }}>
                  <div className="card-body">
                    <div className="card-header bg-white fs-3 fw-bold">Create Account</div>
                    <form onSubmit={handleFormSubmit}>
                      <ul className="list-group list-group-flush">
                        <div className="row mt-4">
                          <div className="col-12">
                            <input
                            type="email"
                            className={`form-control ${emailValid ? 'is-valid' : email ? 'is-invalid' : ''}`}
                            id="exampleFormControlInput1"
                            value={email}
                            autoComplete="off"
                            onChange={(event) => {
                              setEmail(event.target.value);
                              setEmailValid(validateEmail(event.target.value));
                            }}
                            placeholder="Email address"/>
                            <p id="uidnote" className={email && !emailValid ? 'instructions' : 'hidden'}>
                              <FaInfoCircle className="info-circle" />
                              Please input a valid email address.
                            </p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-12">
                            <input
                            type="password"
                            className={`form-control ${passwordValid ? 'is-valid' : password ? 'is-invalid' : ''}`}
                            id="inputPassword"
                            value={password}
                            onChange={(event) => {
                              setPassword(event.target.value);
                              setPasswordValid(validatePassword(event.target.value));
                            }}
                            placeholder="Password"/>
                            <p id="pwdnote" className={passwordValid ? 'hidden' : password ? 'instructions' : 'hidden'}>
                              <FaInfoCircle className="info-circle" />
                              Password must be a minimum of 8 characters.<br />
                              Must include uppercase and lowercase letters, a number, and a special character.
                            </p>
                          </div>
                        </div>
                        <div className="mb-3 row mt-3">
                          <div className="col-12">
                            <input
                            type="password"
                              className={`form-control ${confirmPasswordValid ? 'is-valid' : confirmPassword ? 'is-invalid' : ''}`}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(event) => {
                              setConfirmPassword(event.target.value);
                              setConfirmPasswordValid(validateConfirmPassword(password, event.target.value));
                            }}
                            placeholder="Confirm password"/>
                            <p id="confirmnote" className={confirmPasswordValid ? 'hidden' : confirmPassword ? 'instructions' : 'hidden'}>
                              <FaInfoCircle className="info-circle"/>
                              Must match provided password.
                            </p>
                          </div>
                        </div>
                      </ul>
                      <button
                      type="submit"
                      className="btn btn-primary border-0 fw-bold"
                      style={{ backgroundColor: '#ffc107' }}>Create Account</button>
                    </form>
                    <p className="list-group-item mb-0 mt-5">
                      Already have an account?
                      <Link to="/login" style={{ color: 'blue' }}> Log in</Link>
                    </p>
                  </div>
                </div>
                <Link to="/">Go back to homepage</Link>
              </div>
            </div>
          </div>
        </>
        )
  );
}
