import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./Account"

const Status = () => {

    const [status, setStatus] = useState(false);
    const { getSession, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log("Session:", session)
                setStatus(true);
            })
    }, [])
    
    return (
        < div style={{ fontSize: "24px" }}>
            {status ? <button onClick={logout}>Logout</button> : "please login"}
        </div>
    )
}
export default Status;