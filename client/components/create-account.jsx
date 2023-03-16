import React, { useState } from 'react';

export default function CreateAccount({ handleClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Please enter all required fields.');
      return;
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => {
        if (response.ok) {
          alert('Account created successfully!');
        } else {
          throw new Error('Failed to create account.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to create account.');
      });
  };

  return (
    <div className="container-xxl d-flex justify-content-center">
      <div className="row">
        <div className="col-12 text-center">
          <div className="card mt-4" style={{ width: '22rem' }}>
            <div className="card-body">
              <div className="card-header bg-white fs-3 fw-bold">
                Create Account
              </div>
              <form onSubmit={handleFormSubmit}>
                <ul className="list-group list-group-flush">
                  <div className="mb-3 row mt-4">
                    <div className="col-12">
                      <input type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Email address" />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-12">
                      <input type="password"
                      className="form-control"
                      id="inputPassword"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Password" />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-12">
                      <input type="password"
                      className="form-control"
                      id="confirmPassword"
                        value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      placeholder="Confirm password" />
                    </div>
                  </div>
                </ul>
                <button type="submit" className="btn btn-primary border-0 fw-bold" style={{ backgroundColor: '#ffc107' }}>Create Account</button>
              </form>
              <p className="list-group-item mb-0 mt-5">Already have an account?
                <a
                  onClick={handleClick}
                  style={{ color: 'blue' }}> Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
