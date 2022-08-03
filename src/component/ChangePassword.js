import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";


export default () => {
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [error, setError] = useState("")
    const { getSession } = useContext(AccountContext)


    const onSubmit = (event) => {
        event.preventDefault();
        getSession().then(({ user }) => {
            user.changePassword(password, newPassword, (err, result) => {
                if (err) {
                    console.error(err)
                    setError(err.message)

                }
                else {
                    console.log(result)
                    setError("successfully password changed")

                }

            });
        })
    }
    return (

        <div className="form-group justify-content-center m-3 text-center">

            <form onSubmit={onSubmit} className="border border-dark  m-2">
                <div className="text-center "><strong><em>{error}</em></strong></div>

                <div className="form-group m-3">

                    <label>Current Password :</label> <span>
                        <input value={password}
                            type="password"
                            onChange={(event) => setPassword(event.target.value)} /> </span>
                </div>
                <div className="form-group m-3">

                    <label>New Password :</label> <span>
                        <input value={newPassword}
                            type="password"
                            onChange={(event) => setNewPassword(event.target.value)} /> </span>
                </div>
                <button type="submit" className=" p-2 m-2 btn btn-secondary btn-outline-primary text-light">Change Password</button>

            </form>
        </div>

    )
}