import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "./UserPool";

const ForgotPassword = () => {
    
    const [stage, setStage] = useState(1) //1 is email stage  2 is code stage
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const getUser = () => {
        return new CognitoUser({
            Username: email.toLowerCase(),
            Pool
        })
    }
    const sendCode = event => {
        event.preventDefault();
        getUser().forgotPassword({
            onSuccess: data => {
                console.log("onSuccess :", data)
                setError("successfully set the password")
            },
            onFailure: err => {
                console.error("onFailure :", err)
                setError(err.message)
            },
            inputVerificationCode: data => {
                console.log("Input code :", data)
                setStage(2)
            }
        })
    }
    const resetPassword = event => {
        event.preventDefault();
        if (password === !confirmPassword) {
            console.error("passwords are not the same")
            return;
        }
        getUser().confirmPassword(code, password, {
            onSuccess: data => {
                console.log("onSuccess :", data)
                setError("User successfully updated")
            },
            onFailure: err => {
                console.error("onFailure :", err)
                setError(err.message)
            },
        })
    };
    return (
        <>
            <h1 className=" m-2 p-3 text-center">Forgot Password</h1>
            <div className="text-center "><strong><em>{error}</em></strong></div>
            <div className="form-group  p-3 m-4 border border-dark ">
                {stage === 1 && (
                    <form onSubmit={sendCode} className="text-center" >
                        <label>Email Id :</label> <span>
                            <input value={email} onChange={event => setEmail(event.target.value)
                            } /> </span>
                        <div className="p-1 m-1 text-center">
                            <button type="submit" className=" p-2 m-2 btn btn-secondary btn-outline-primary text-light">send verification code</button>
                        </div>

                    </form>
                )}
                {stage === 2 && (
                    <div className="form-group  p-3 m-4 border border-dark ">
                        <form onSubmit={resetPassword} className="text-center">
                            <div className="form-group m-3">
                                <label>code :</label> <span>
                                    <input value={code}
                                        onChange={event => setCode(event.target.value)} /></span>
                            </div>

                            <div className="form-group m-3">
                                <label>New Password :</label> <span>
                                    <input value={password}
                                        type="password"
                                        onChange={event => setPassword(event.target.value)} />
                                </span>
                            </div>

                            <div className="form-group m-3">
                                <label>Confirm Password :</label> <span>
                                    <input value={confirmPassword}
                                        type="password"
                                        onChange={event => setConfirmPassword(event.target.value)} /> </span>
                            </div>

                            <div className="p-1 m-1 text-center">
                                <button type="submit" className=" p-2 m-2 btn btn-secondary btn-outline-primary text-light">Change Password</button>
                            </div>

                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export default ForgotPassword;