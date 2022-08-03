import React, { useState } from "react";
import UserPool from "./UserPool";

const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err)
        setError(err.message)
      }
      else {
        console.log(data)
        setError("User successfully registered")
      }
    })
  }

  return (
    <>
      <h1 className="  m-2  p-2 text-center bg-secondary text-light ">Sign Up</h1>
      <div className="form-group justify-content-center m-3 text-center">
        <form onSubmit={onSubmit} className="border border-dark  m-2">
          <div className="text-center "><strong><em>{error}</em></strong></div>
          <div className="form-group m-3">
            <label htmlFor="email">Email Id: </label> <span>
              <input value={email}
                required
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              ></input> </span>
          </div>

          <div className="form-group m-3">
            <label htmlFor="password">Password :</label> <span>
              <input value={password}
                type="password"
                required
                onChange={(event) => setPassword(event.target.value)}
              ></input> </span>
          </div>

          <div className="m-3">
            <button type="submit"
              className="btn btn-secondary btn-outline-primary text-light">signUp</button>
          </div>
          
        </form>
      </div>
    </>
  )
}
export default Signup;