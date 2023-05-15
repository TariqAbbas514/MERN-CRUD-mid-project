import React from 'react'

const Register = () => {
  return (
    <>
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">User Registration Form</h1>
              <p className="lead">
                Please provide the necessary information to get register with
                Food App
              </p>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="m-sm-4">
                  <form>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                    //   onChange={(e)=>setName(e.target.value)}
                        className="form-control form-control-lg"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input
                    //   onChange={(e)=>setAddress(e.target.value)}
                        className="form-control form-control-lg"
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                    //   onChange={(e)=>setEmail(e.target.value)}
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                    //   onChange={(e)=>setPassword(e.target.value)}
                        className="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="text-center mt-3">
                      {/* <button onClick={postingData} */}
                      <button
                      to="/register" className="btn btn-lg btn-primary">
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register