import React from "react";

const UserInfo = ({ name, email}) => {
    return (
        <div>
            <h1>User Info</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    )
}

export default UserInfo;