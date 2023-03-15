import React from 'react';

export default function CreateAccount({ handleClick }) {
  return (
    <div className="container-xxl d-flex justify-content-center">
      <div className="row">
        <div className="col-12 text-center">
          <div className="card mt-4" style={{ width: '22rem' }}>
            <div className="card-body">
              <div className="card-header bg-white fs-3 fw-bold">
                Create Account
              </div>
              <ul className="list-group list-group-flush">
                <div className="mb-3 row mt-4">
                  <div className="col-12">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-12">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-12">
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                  </div>
                </div>
              </ul>
              <a href="#" className="btn btn-primary border-0 fw-bold" style={{ backgroundColor: '#ffc107' }}>Create Account</a>
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
