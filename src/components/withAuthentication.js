import React, { useEffect, useState } from "react";

const defaultAuthLogic = () => new Promise((resolve) => setTimeout(resolve(false), 2000)); // defaults to false
const DefaultAccessDeniedComponent = () => <div>Access Denied</div>

const withAuthentication = (Component, authLogic = defaultAuthLogic, AccessDeniedComponent = DefaultAccessDeniedComponent) => {
    return (props) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isAuthenticating, setIsAuthenticating] = useState(true);
        const [userInfo, setUserInfo] = useState(null);

        useEffect(() => {
            authLogic().then((authResult) => {
                setIsAuthenticated(authResult);

                if(authResult) {
                    setUserInfo({
                        username: 'didierganthier',
                        role: 'admin'
                    })
                }
            })
            .finally(() => setIsAuthenticating(false));
        }, [])

        if(isAuthenticating) {
            return <div>Authenticating...</div>
        }

        if(!isAuthenticated) {
            return <AccessDeniedComponent />
        }

        return (
            <Component {...props} userInfo={userInfo}/>
        )
    }
}

export default withAuthentication;