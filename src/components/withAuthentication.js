import React, { useEffect, useState } from "react";

const withAuthentication = (Component) => {
    return (props) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isAuthenticating, setIsAuthenticating] = useState(true);

        // simulate authentication
        useEffect(() => {
            setTimeout(() => {
                setIsAuthenticated(false);
                setIsAuthenticating(false)
            }, 2000)
        }, [])

        if(isAuthenticating) {
            return <div>Loading...</div>
        }

        if(!isAuthenticated) {
            return <div>Access Denied</div>
        }

        return (
            <Component {...props}/>
        )
    }
}

export default withAuthentication;