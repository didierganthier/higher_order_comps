import React, { useEffect, useState } from "react";

const withLoadingAndData = (Component, fetchData) => {
    return () => {
        const [isLoading, setIsLoading] = useState(true);
        const [data, setData] = useState(null);

        useEffect(() => {
            fetchData().then((data) => setData(data))
            .finally(() => setIsLoading(false));
        }, [])

        if (isLoading) {
            return <div>Loading...</div>
        }

        return data ? <Component {...data} /> : null;
    }
}

export default withLoadingAndData;