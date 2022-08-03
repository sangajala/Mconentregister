import React, { useEffect, useContext, useState } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";
import ChangeEmail from "./ChangeEmail"

export default () => {
    
    const { getSession } = useContext(AccountContext);
    const [loggedin, setLoggedIn] = useState(false)

    useEffect(() => {
        getSession().then(() => {
            setLoggedIn(true)
        })
    }, [])
    return (
        <div className="settings">
            {loggedin && (
                <>
                    <h1 className="  m-2  p-2 text-center bg-secondary text-light ">Settings</h1>
                    <ChangePassword />
                </>
            )}
        </div>
    )
}
