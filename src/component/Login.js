import { Link } from "@aws-amplify/ui-react";
import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { authenticate } = useContext(AccountContext)

    const onSubmit = (event) => {
        event.preventDefault();
        authenticate(email, password)
            .then(data => {
                console.log("Logged in!", data)
                setError("User successfully Logged In")
            })
            .catch(err => {
                console.log("failed to login!", err)
                setError(err.message)
            })
    };

    return (
        <>
            <h1 className="  m-2  p-2 text-center bg-secondary text-light ">Login</h1>
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

                    <Link to="/forgotpassword"> ForgotPassword </Link>
                    
                    <div className="m-3">
                        <button type="submit"
                            className="btn btn-secondary btn-outline-primary text-light">Login</button>
                    </div>

                </form>
            </div>
        </>

    )
}
export default Login;