import React, { useEffect, useState } from "react";

const withLoading = (Component) => {
    return (props) => {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => setIsLoading(false), 2000);
            return () => clearTimeout(timer);
        }, [])

        if(isLoading) {
            return <div>Loading...</div>
        }

        return <Component {...props} />
    }
}

export default withLoading;